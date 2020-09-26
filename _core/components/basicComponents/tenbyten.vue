<template>
  <div class="ten-by-ten">
    <div class='text'>Ten By Ten Dummy</div>
  </div>
</template>

<script>

export default {
  props: {

  },

};
</script>

<style scoped lang="scss">
    .ten-by-ten {
      min-width:100px;
      min-height:100px;
      height:100px;
      overflow: hidden;
      text-align: center;
      background-color: #0d5bdd;
      color: #00d3ee;
    }

  .ten-by-ten:before {
    width:0;
    content: ' ';
    height:100%;
    display:inline-block;
    vertical-align: middle;
  }

  .text {
    display: inline-block;
    vertical-align: middle;
  }

</style>
