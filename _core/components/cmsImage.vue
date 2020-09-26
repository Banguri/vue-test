<template>
  <img :src="src" />
</template>

<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

Vue.mixin({
  methods: {
    $cmsSrc(fileValue) {
      if (!fileValue) {
        return '';
      }

      if (typeof fileValue === 'string') {
        if (/^https?:\/\//.test(fileValue)) {
          return fileValue.replace(/^https?:/, '');
        }

        return '//' + this.$$config.apiHost + fileValue;
      }

      return '//' + this.$$config.apiHost + '/' + fileValue.storePath;
    },
  },
});


export default {
  props: {
    data: {
      type: [String, Object],
    }
  },

  computed: {
    src() {
      return this.$cmsSrc(this.data);
    }
  }
}
</script>

<style></style>
