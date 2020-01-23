<template>
  <div class="presentation-container">
    <div class="slide-container" v-on:click="slideClicked($event)">
      <transition :name="transitionName" mode="out-in">
        <component :is="`slide-${talkName}-${slide}`" :subSlide="subSlide"></component>
      </transition>
    </div>

    <!-- <div v-if="showSlideNumber" class="slide-slide-number">{{ slide }}</div> -->

    <div v-if="showControls" class="slide-nav-button-container">
      <b-button
        tag="a"
        :href="previousSlideRoute"
        @click.prevent="navigateClicked(false)"
        :disabled="!canNavigateBackward"
        type="is-link"
      >
        <font-awesome-icon icon="angle-double-left" size="lg" />
      </b-button>
      <b-button
        tag="a"
        :href="previousSubSlideRoute"
        @click.prevent="navigateSubClicked(false)"
        :disabled="!canNavigateSubBackward"
        type="is-link"
      >
        <font-awesome-icon icon="angle-left" size="lg" />
      </b-button>
      <b-button
        tag="a"
        :href="nextSubSlideRoute"
        @click.prevent="navigateSubClicked(true)"
        :disabled="!canNavigateSubForward"
        type="is-link"
      >
        <font-awesome-icon icon="angle-right" size="lg" />
      </b-button>
      <b-button
        tag="a"
        :href="nextSlideRoute"
        @click.prevent="navigateClicked(true)"
        :disabled="!canNavigateForward"
        type="is-link"
      >
        <font-awesome-icon icon="angle-double-right" size="lg" />
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue as VueClass, Watch } from "vue-property-decorator";
import Vue from 'vue';
import { Route } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons/faAngleDoubleLeft";
import store from "@/store";

library.add(faAngleRight);
library.add(faAngleLeft);
library.add(faAngleDoubleRight);
library.add(faAngleDoubleLeft);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class PresentationContainer extends VueClass {
  @Prop({ default: true, type: Boolean }) public showSlideNumber!: number;
  @Prop({ default: true, type: Boolean }) public showControls!: boolean;

  public transitionName: string = "fade";
  public talkName: string = 'grpc';

  public get slide() {
    const name = store.getters.slides.currentSlide.name;
    // const component = (Vue as any).options.components['slide-'+name];
    // if (!component) {
    //   this.$router.push({ name: 'slide-not-found' })
    // }
    return name;
  }
  public get subSlide(): number {
    return store.getters.slides.currentSub;
  }
  public get nextSlideRoute(): string {
    return store.getters.slides.nextSlideRoute;
  }
  public get previousSlideRoute(): string {
    return store.getters.slides.previousSlideRoute;
  }
  public get nextSubSlideRoute(): string {
    return store.getters.slides.nextSubSlideRoute;
  }
  public get previousSubSlideRoute(): string {
    return store.getters.slides.previousSubSlideRoute;
  }
  public get canNavigateForward(): boolean {
    return store.getters.slides.canNavigateForward;
  }
  public get canNavigateBackward(): boolean {
    return store.getters.slides.canNavigateBackwards;
  }
  public get canNavigateSubForward(): boolean {
    return store.getters.slides.canNavigateSubForward;
  }
  public get canNavigateSubBackward(): boolean {
    return store.getters.slides.canNavigateSubBackwards;
  }
  public async slideClicked(event: MouseEvent) {
    const elementX = event.x;
    if (event.srcElement === null) {
      return;
    }
    const elementWidth = (event.srcElement as HTMLElement).clientWidth;
    const clickRatio = elementX / elementWidth;
    // const newUrl = await store.dispatch.slides.navigateSubSlide({
    //   forward: clickRatio >= 0.5
    // });
    // this.navigateToNewPath(newUrl);
  }

  public async navigateClicked(forward: boolean) {
    const newUrl = await store.dispatch.slides.navigateOne({ forward });
    this.navigateToNewPath(newUrl);
  }

  public async navigateSubClicked(forward: boolean) {
    const newUrl = await store.dispatch.slides.navigateSubSlide({ forward });
    this.navigateToNewPath(newUrl);
  }

  private navigateToNewPath(newUrl: string | false): Promise<Route> {
    if (!newUrl) {
      return Promise.resolve(this.$route);
    }

    const newRoute: any = {};
    Object.assign(newRoute, this.$route);
    newRoute.path = newUrl;
    //this.transitionName = forward ? 'slide-left' : 'slide-right';
    newRoute.name = undefined;
    return this.$router.push(newRoute);
  }
}
</script>

<style scoped lang="scss">
@import "../styles/bulma.customize.scss";

@media only screen and (max-width: $tablet) {
  .full-height-slide {
    margin-bottom: 165px;
  }
}

@media only screen and (min-width: $tablet) {
  .slide-container {
    font-size: 28px;
  }
}

@media only screen and (min-width: $desktop) {
  .slide-container {
    font-size: 32px;
  }
}

@media only screen and (min-width: $widescreen) {
  .slide-container {
    font-size: 36px;
  }
}

@media only screen and (min-width: $fullhd) {
  .slide-container {
    font-size: 40px;
  }
}

.presentation-container {
  position: relative;
  height: calc(100vh - #{$navbar-height});
  margin-top: 25px;
  user-select: none;
}

.slide-nav-button-container {
  position: fixed;
  // top: calc(#{$navbar-height} + 35px);
  bottom: 35px;
  right: 35px;
}

.slide-slide-number {
  position: fixed;
  bottom: 35px;
  left: 35px;
}

.full-height-slide {
  @extend .container;
  @extend .section;
  height: calc(100vh - #{$navbar-height});
  max-height: calc(100vh - #{$navbar-height});
}

$transition-duration: .35s;

.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-duration;
  width: 100%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform $transition-duration;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform $transition-duration;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
