<template>
  <div :class="className">
    <div
      v-if="allYn"
      class="custom-control custom-radio custom-control-inline"
      v-bind:key="'all_' + pid"
    >
      <input
        type="radio"
        :name="'radio_css_inline_' + pid + '_' + uuid"
        :value="'all_' + pid"
        :id="'all_' + pid + '_' + uuid"
        v-model="value"
        class="custom-control-input"
      />
      <label :for="'all_' + pid + '_' + uuid" class="custom-control-label"
        >전체</label
      >
    </div>
    <template v-for="(item, index) in items">
      <div
        class="custom-control custom-radio custom-control-inline"
        v-bind:key="pid + '_' + item[valueKey] + '_' + index"
      >
        <input
          type="radio"
          :name="'radio_css_inline_' + pid + '_' + uuid"
          :value="item[valueKey]"
          :id="pid + '_' + item[valueKey] + '_' + index + '_' + uuid"
          v-model="value"
          :checked="checked(item[valueKey])"
          class="custom-control-input"
        />
        <label
          :for="pid + '_' + item[valueKey] + '_' + index + '_' + uuid"
          class="custom-control-label"
          >{{ item[displayKey] }}</label
        >
      </div>
    </template>
  </div>
</template>
<script>
import UUID from "vue-uuid";

export default {
  name: "Radio",
  props: {
    onEventPropFunc: {
      type: Function,
      default: function(e) {},
    },
    label: {
      type: String,
      default: "",
    },
    selectUrl: {
      type: String,
      default: "",
      required: true,
    },
    valueKey: {
      type: String,
      default: "value",
    },
    displayKey: {
      type: String,
      default: "label",
    },
    defaultQuery: {
      type: Object,
      default: function() {
        return {};
      },
    },
    pid: {
      type: String,
      required: true,
    },
    propValue: {},
    allYn: {
      default: false,
    },
    required: {
      default: false,
    },
    originValue: {},
  },
  methods: {
    getValue() {
      let pid = this.pid;
      const data = {};
      console.log(this.value)
      if (this.value == "all_" + this.pid) {
        data[pid] = "";
      } else {
        data[pid] = this.value;
      }
      return data;
    },
    clickChange(e) {
      this.checked = e.target["value"];
    },
    loadData() {
      let textQuery = {};
      if (!_.isUndefined(this.searhKey) && this.searhKey != "") {
        textQuery[this.searhKey] = search;
      }
      const searchQuery = Object.assign(this.defaultQuery, textQuery);
      this.$fetch({
        api: {
          path: this.selectUrl,
          method: "get",
        },
        query: searchQuery,
      }).then((res) => {
        console.log("result", res);
        this.items = res.data.items;
      });
    },
    checkValidation(createCheck) {
      let className = this.className;
      let validation = this.validation;
      if (this.required) {
        const val = this.value;
        if (!_.isUndefined(val) && !_.isEmpty(val) && val.trim() != "") {
          if (!this.validation) {
            validation = true;
            className = " is-valid";
          }
        } else {
          validation = false;
          className = " is-invalid";
        }
        console.log("className", className);
        console.log("this.validation", this.validation);
        if (createCheck) {
          this.validation = validation;
          this.className = className;
        } else if (validation != this.validation) {
          this.validation = validation;
          this.className = className;
        }
      }
    },
    checked(value) {
      return this.value == value;
    },
    getValidation() {
      return this.validation;
    },
  },
  watch: {
    propValue() {
      this.value = this.propValue;
    },
    value: function(val, oval) {
      this.checkValidation();
      if (_.isFunction(this.onEventPropFunc)) {
        this.onEventPropFunc("radio", this.getValue());
      }
    },
  },
  data() {
    return {
      items: [],
      value: this.propValue,
      className: "",
      validation: !this.required,
      uuid: this.$uuid.v1(),
    };
  },
  mounted() {},
  created() {
    console.log("propValue", this.propValue);
    console.log(this.$uuid.v1());
    console.log("checkId", this.pid + "_" + this.uuid);
    this.checkValidation(true);
    this.loadData();
  },
};
</script>

<style></style>
