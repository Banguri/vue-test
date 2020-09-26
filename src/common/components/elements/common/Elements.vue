<template>
  <div :class="makeClass()">
    <Select
      v-if="fieldInfo.type == 'select'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <TextInput
      v-else-if="fieldInfo.type == 'input'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <CheckBox
      v-else-if="fieldInfo.type == 'checkBox'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <Radio
      v-else-if="fieldInfo.type == 'radio'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <TextArea
      v-else-if="fieldInfo.type == 'textarea'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <TextP
      v-else-if="fieldInfo.type == 'text'"
      v-bind="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <Common-Btn
      v-else-if="fieldInfo.type == 'btn'"
      v-bind="fieldInfo.btnObject"
      :onPropClick="callBackEvent"
    />
    <Dynamic-Component
      v-else-if="fieldInfo.type == 'custom'"
      :fieldInfo="fieldInfo"
      :onEventPropFunc="callBackEvent"
      :propValue="value"
      :ref="`subElement_` + fieldInfo.pid"
      :attrProps="attrProps"
      :originValue="originValue"
    />
    <date-pick
      v-else-if="fieldInfo.type === 'date-picker'"
      :options="fieldInfo.options"
      :onEventPropFunc="callBackEvent"
    />
  </div>
</template>

<script>
import Select from "./Select";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Radio from "./Radio";
import TextArea from "./TextArea";
import TextP from "./TextP";

/**
 * prop.
 * propCallBackEvent : 콜백func으로 이벤트(type,value)를 반환
 * fieldInfo : 컬럼 설정 정보
 * formType : search,create,update등 정보(사용할지..)
 * index : Elements index
 * propValue : prop Value(this.propValue ? this.propValue : this.fieldInfo.defaultValue ? this.fieldInfo.defaultValue : "")
 * setValue :
 *
 * methods.
 * callBackEvent : propCallBackEvent으로 이벤트 콜백.
 * setValue : Element 값 변경 및 셋팅.
 * getValue : Element 값 반환.
 * value :{ket : value} object 반환.
 *
 * Dynamic-Component custom 컴포넌트 반환.
 */
export default {
  name: "Elements",
  components: {
    Select,
    TextInput,
    CheckBox,
    Radio,
    TextArea,
    TextP,
  },
  props: {
    propCallBackEvent: {
      type: Function,
      default: function(type, value) {
        console.log("not func");
      },
    },
    //fetchSheets nodeType 참고
    fieldInfo: {
      type: Object,
      required: true,
    },
    formType: {
      type: String,
      default: "form",
    },
    index: {
      type: Number,
    },
    propValue: {},
    originValue: {},
  },
  methods: {
    callBackEvent(type, value) {
      if (_.isFunction(this.propCallBackEvent)) {
        this.propCallBackEvent(type, value);
      }
    },
    setValue(value) {
      const subElementRefsKey = `subElement_${this.fieldInfo.pid}`;
      const subElementRefs = this.$refs[subElementRefsKey];
      subElementRefs.setValue(value);
    },
    getValue() {
      const subElementRefsKey = `subElement_${this.fieldInfo.pid}`;
      const subElementRefs = this.$refs[subElementRefsKey];
      return subElementRefs.getValue();
    },
    reloadData(query) {
      const subElementRefsKey = `subElement_${this.fieldInfo.pid}`;
      const subElementRefs = this.$refs[subElementRefsKey];
      subElementRefs.reloadData(query);
    },
    makeClass() {
      return this.fieldInfo["colSize"];
    },
    getValidation() {
      const subElementRefsKey = `subElement_${this.fieldInfo.pid}`;
      const subElementRefs = this.$refs[subElementRefsKey];
      return subElementRefs.getValidation();
    },
    getObjValue() {
      const subElementRefsKey = `subElement_${this.fieldInfo.pid}`;
      const subElementRefs = this.$refs[subElementRefsKey];
      if (_.isFunction(subElementRefs.getObjValue)) {
        return subElementRefs.getObjValue();
      }
    },
  },
  computed: {
    value() {
      return this.propValue
        ? this.propValue
        : this.fieldInfo.defaultValue
        ? this.fieldInfo.defaultValue
        : "";
    },
  },
  data() {
    return {
      attrProps: {},
    };
  },
  mounted() {},
  created() {},
};
</script>

<style></style>
