<template>
  <transition name="fade" mode="in-out">
    <div class="loader-component" :class="cClasses" v-show="loading || isLoading">
      <div class="spinner-border" :style="style">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </transition>
</template>
<script>
import isEmpty from 'lodash/isEmpty';

export default {
  props: {
    isLoading: {
      type: Boolean,
    },
  },

  data(){
    return {
      loading: false,
      style: {},
    }
  },

  computed: {
    cClasses() {
      if (this.isLoading) {
        return { ['absolute']: true };
      }

      return {
        ['fixed']: true,
      };
    }
  },

  methods: {

    start(spinnerConfig) {
      if (!isEmpty(spinnerConfig)) {
        this.style = { ...spinnerConfig };
      }
      this.loading = true;
    },

    finish() {
      this.loading = false;
    }
  }
}

</script>
<style scope lang="scss">
.loader-component {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  transition: opacity 0.2s ease;
  z-index: 9999;
  .spinner-border {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    margin-top: -2.5rem;
    margin-left: -2.5rem;
    border: 0.25em solid #6372d3;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;

    @keyframes spinner-border {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(90deg);
      }
      50% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(270deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  }
  &.fixed {
    position: fixed;
    .spinner-border {
      width: 4rem;
      height: 4rem;
    }
  }
  &.absolute {
    position: absolute;
  }
  &.fade-enter-active {
    transition: opacity 0.5s;
  }

  &.fade-enter,
  &.fade-leave-active {
    opacity: 0;
  }
}
</style>
