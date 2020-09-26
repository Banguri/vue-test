<template>
  <div>
    <slot v-if="matched"/>
  </div>
</template>

<script>
export default {
  props: {
    allowSites: {
      type: String,
      default: 'all',
      // site 종류  ecom, unishop, assan
      // +) "ecom,unishop" 콤마로 여러개 허용 가능
    },
  },

  computed: {
    sites() {
      return this.allowSites
        .split(',')
        .map(d => d.trim())
        .filter(d => !!d);
    },

    matched() {
      let current = this.$store.state.site.id;

      if (this.allowSites === 'all' || this.sites.find(d => d === current)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style></style>
