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
    store.dispatch.slides.initializeOnSlide(this.getSlideNumberFromRoute(this.$route));
  }

  @Watch("$route", { immediate: true, deep: true })
  public watchRoute(to: Route, from: Route): void {
    const newPosition = this.getSlideNumberFromRoute(to);
    store.dispatch.slides.initializeOnSlide(newPosition);
  }

  private getSlideNumberFromRoute(route: Route): {slide: number, subSlide: number} {
    const slideString = route.params["slide"];
    if (!slideString) {
      return  {slide: 1, subSlide: 0};
    }

    const slideNumber = parseInt(slideString);
    if (!isFinite(slideNumber)) {
      return {slide: 1, subSlide: 0};
    }

    if (slideNumber < 1) {
      return {slide: 1, subSlide: 0};
    }

    const subSlideString = route.params["subSlide"];
    if (!subSlideString) {
      return  {slide: slideNumber, subSlide: 0};
    }

    const subSlideNumber = parseInt(subSlideString);
    if (!isFinite(subSlideNumber)) {
      return {slide: slideNumber, subSlide: 0};
    }

    if (subSlideNumber < 0) {
      return {slide: slideNumber, subSlide: 0};
    }
    return { slide: slideNumber, subSlide: subSlideNumber};
  }
}
</script>

<style lang="scss" scoped>
</style>