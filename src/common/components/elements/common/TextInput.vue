<template>
  <div :class="className">
    <input
      class="form-control form-control-sm"
      type="text"
      :placeholder="placeholder"
      v-model="value"
      :disabled="disabled"
      :required="required"
    />
    <Common-Btn
      v-if="btnCheck()"
      v-bind="btnObject"
      :onPropClick="onBtnClick"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  components: {},
  props: {
    onEventPropFunc: {
      type: Function,
      default: function(e) {},
    },
    pid: {
      type: String,
      required: true,
    },
    propValue: {},
    btnObject: {
      type: Object,
      default: function() {
        return {};
      },
    },
    disabled: {
      default: false,
    },
    required: {
      default: false,
    },
    originValue: {},
    placeholder: {
      default: "",
      type: String,
    },
  },
  methods: {
    btnCheck() {
      return !_.isEmpty(this.btnObject);
    },
    onBtnClick(key) {
      this.onEventPropFunc(key, this.getValue());
    },
    getValue() {
      let pid = this.pid;
      const data = {};
      data[pid] = this.value;
      return data;
    },
    setValue(value) {
      this.value = value;
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
        if (createCheck) {
          this.validation = validation;
          this.className = className;
        } else if (validation != this.validation) {
          this.validation = validation;
          this.className = className;
        }
      }
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

      // TODO validation 체크안하고 넘김 추후 확인후 벨리데이션 체크필요
      this.onEventPropFunc("input", this.getValue());
    },
  },
  data() {
    return {
      value: this.propValue,
      className: "",
      validation: !this.required,
    };
  },
  created() {
    this.checkValidation(true);
  },
};
</script>

<style></style>
