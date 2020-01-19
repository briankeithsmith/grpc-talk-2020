<template>
  <PresentationContainer :slideNumber="currentSlideNumber">
    <router-view></router-view>
  </PresentationContainer>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import PresentationContainer from "@/components/PresenationContainer.vue";
import store from "@/store";

@Component({
  components: {
    PresentationContainer
  }
})
export default class Slides extends Vue {
  public get currentSlideNumber() {
    return store.getters.slides.currentSlide;
  }
  
  public mounted() {
    store.dispatch.slides.initializeOnSlide({slideNumber: this.getSlideNumberFromRoute(this.$route)});
  }

  @Watch("$route", { immediate: true, deep: true })
  public watchRoute(to: Route, from: Route): void {
    const newSlideNumber = this.getSlideNumberFromRoute(to);
    store.dispatch.slides.initializeOnSlide({slideNumber: newSlideNumber});
  }

  private getSlideNumberFromRoute(route: Route): number {
    const slideString = route.params["slideNumber"];
    if (!slideString) {
      return  1;
    }

    const slideNumber = parseInt(slideString);
    if (!isFinite(slideNumber)) {
      return 1;
    }

    if (slideNumber < 1) {
      return 1;
    }

    return slideNumber;
  }
}
</script>

<style lang="scss" scoped>
</style>