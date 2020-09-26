<template>
  <div
    :class="{
      row: !getType && !getDisplayType,
      'row-space-4': !getType && !getDisplayType,
      'form-inline': getDisplayType,
    }"
  >
    <div
      v-for="(date, i) in getOptions.dates"
      :key="i"
      :class="{
        'form-group': getType || getDisplayType,
        'col-6': !getType && !getDisplayType,
      }"
    >
      <div class="input-group">
        <DatePick
          class="form-control-sm bg-white"
          v-model="date.model"
          :config="date.config"
          placeholder="종료일"
        />
        <div class="input-group-append">
          <label for="dateInput" class="input-group-text">
            <i class="fa fa-calendar" />
          </label>
        </div>
        <span v-if="i !== getOptions.dates.length - 1" class="form-text">
          ~
        </span>
      </div>
    </div>
    <div v-if="!getType && getOptions.btns" class="form-group m-l-10">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-white btn-sm"
          v-for="(btn, i) in getOptions.btns"
          :key="i"
          @click="handleDuration(btn)"
        >
          {{ btn.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from "vue-bootstrap-datetimepicker";
import moment from "moment";

export default {
  name: "DatePicker",
  components: {
    DatePick,
  },
  data() {
    return {
      dateOptions: this.options,
    };
  },
  props: {
    options: {
      type: Object,
      default: {
        type: "default", // default || term
        displayType: "inline", // inline || full
        dates: [
          {
            model: null,
            config: {
              format: "YYYY-MM-DD",
              useCurrent: false,
            },
            placeholder: "",
            pid: "",
          },
        ],
        btns: null,
      },
    },
    onEventPropFunc: {
      type: Function,
    },
  },
  computed: {
    getType() {
      return this.dateOptions.type !== "term";
    },
    getDisplayType() {
      return this.dateOptions.displayType !== "full";
    },
    getOptions() {
      return this.dateOptions;
    },
  },
  watch: {
    dateOptions: {
      handler() {
        const changeDates = this.dateOptions.dates.map((date) => {
          return {
            [date.pid]: date.model,
          };
        });

        this.onEventPropFunc("date-picker", changeDates);
      },
      deep: true,
    },
  },
  methods: {
    handleDuration(target) {
      // dateKey y, M, d(년, 월, 일)
      const { date, dateKey } = target;
      const lastDate = this.dateOptions.dates.length - 1;
      this.dateOptions = {
        ...this.dateOptions,
        dates: this.dateOptions.dates.map((optionDate, i) => {
          if (i < lastDate) {
            const model = moment(lastDate.model)
              .add(-date, dateKey)
              .format("YYYY/MM/DD");
            return {
              ...optionDate,
              model,
            };
          } else {
            return optionDate;
          }
        }),
      };
    },
  },
};
</script>
