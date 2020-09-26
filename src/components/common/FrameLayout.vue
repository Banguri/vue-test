<template>
  <panel :title="title">
    <div v-if="subTxt" class="alert bg-light">
      <p class="m-b-0">{{ subTxt }}</p>
    </div>
    <slot />
  </panel>
</template>

<script>
export default {
  name: "FrameLayout",
  props: {
    title: { type: String, default: "", require: true },
    subTxt: { type: String, default: null },
  },
};
</script>
