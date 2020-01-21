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

  private getSlideNumberFromRoute(route: Route): {slide: string, subSlide: number} {
    const slide = route.params["slide"];
    const subSlideString = route.params["subSlide"];
    if (!slide) {
      return  {slide, subSlide: 0};
    }

    
    if (!subSlideString) {
      return  {slide, subSlide: 0};
    }

    const subSlideNumber = parseInt(subSlideString);
    if (!isFinite(subSlideNumber)) {
      return {slide, subSlide: 0};
    }

    if (subSlideNumber < 0) {
      return {slide, subSlide: 0};
    }
    return { slide, subSlide: subSlideNumber};
  }
}
</script>

<style lang="scss" scoped>
</style>