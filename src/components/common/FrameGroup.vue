<template>
  <div class="groupWrap">
    <div v-for="title in titleBox" :key="title.title" class="titleBox">
      <h5 v-if="title.heading === 'h1'">
        <i class="fa fa-caret-square-right" /> {{ title.title }}
      </h5>
      <h6 v-else-if="title.heading === 'h2'">
        <i class="fa fa-caret-right" /> {{ title.title }}
      </h6>
      <div v-if="title.isRight" class="float-right">
        <fragment v-for="obj in title.isRight" :key="obj.text">
          <button
            v-if="obj.el === 'button'"
            :class="obj.class"
            @click="obj.onClick"
          >
            {{ obj.text }}
          </button>
          <fragment v-else-if="obj.el === 'span'">
            <span :class="obj.class">*</span>{{ obj.text }}
          </fragment>
        </fragment>
      </div>
    </div>
    <slot />
    <div v-if="btnBox" class="btnBox">
      <fragment v-for="btn in btnBox" :key="btn.text">
        <button
          v-if="btn.el === 'button'"
          :class="btn.class"
          @click="btn.onClick"
        >
          <i v-if="btn.icon" :class="btn.icon" />
          {{ btn.text }}
        </button>
      </fragment>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrameLayout",
  props: {
    titleBox: { type: Array, default: [], require: true },
    btnBox: { type: Array },
  },
};
</script>
