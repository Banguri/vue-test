<template>
  <div>
    <children-slot :class="topClass">
      <div
        v-if="$isEditor()"
        class="holder"
      >
        Container
      </div>
      <slot />

      <builder-placeholder
        v-if="$get($slots,'default',[]).length === 0"
        height="300px"
        title="DROP HERE"
      />
    </children-slot>
  </div>
</template>

<script>
import get from 'lodash/get';

export default {
  props: {
    isRoot: {
      type: Boolean,
    },
  },

  computed: {
    topClass() {
      /**
       * 근처영역 마우스 오버 감지후 실제 컨텐츠를 감싸는 높이에 따라 스스로 높이 확장
       */

      return {
        'sys-container ': true,
        'hold-bolder': this.$isEditor(),
      };
    },
  },

  // render(ce, a) {
  //   let slots = get(this.$slots, 'default', [])
  //     if( slots.length === 0 ){
  //       return ce('builder-placeholder', { class: this.topClass, props: {height:'100px', width:'100%'} });
  //     }
  //   // return ce('children-slot', { class: this.topClass }, slots)
  // },
};
</script>

<style scoped lang="scss">
    .sys-container {
    }

    .hold-bolder {
        border:4px dashed #00d3ee;
    }

    .holder {
      /*width: 100%;*/
      height: 20px;
      line-height: 1.4;
      text-align: center;
      color: black;
      background-color: #0ce2da61;
      border-bottom: 2px dashed #01d3ee;
    }
</style>
