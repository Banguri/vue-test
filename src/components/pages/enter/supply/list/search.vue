<template>
  <div class="formLayout m-b-20">
    <form @submit="submit">
      <div class="formBox">
        <div class="form-wrap">
          <div class="form-group row row-space-0">
            <fragment v-for="(line, i) in searchForm" :key="i">
              <div
                v-for="(pidInfo, ii) in line"
                :key="ii"
                :class="makeClass(line.length)"
              >
                <div class="row row-space-0">
                  <label class="col-custom-1 col-form-label">
                    <span v-if="pidInfo.required" class="el-required">*</span>
                    {{ pidInfo.label }}
                  </label>
                  <div class="col-custom-5">
                    <Elements
                      :fieldInfo="pidInfo"
                      :propCallBackEvent="callBackEvent"
                      :ref="`defaultRefs_` + pidInfo.pid"
                    />
                  </div>
                </div>
              </div>
            </fragment>
          </div>
        </div>
      </div>
      <div class="btnBox">
        <button type="submit" class="btn btn-green btn-sm">
          <i class="fa fa-search" /> 검색
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Elements from "@@/src/common/components/elements/common/Elements";
export default {
  name: "Search",
  components: {
    Elements,
  },
  props: {
    queryParams: {
      type: Object,
      default: {},
      required: true,
    },
    searchForm: {
      type: Array,
      required: true,
    },
  },
  computed: {
    lineClass() {
      return "col-lg-6";
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log(this.queryParams);
    },
    callBackEvent(type, value) {
      this.$emit("handleUpdate", { type, value });
    },
    makeClass(lineLength) {
      const flag = 12;
      const colLineSize = (flag - lineLength) / lineLength + 1;

      return `col-lg-${colLineSize}`;
    },
  },
};
</script>
