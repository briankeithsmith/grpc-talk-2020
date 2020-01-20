<template>
  <div class="presentation-container">
    
    <div class="slide-container" v-on:click="slideClicked($event)">
      <transition :name="transitionName">
        <component :is="`slide-${slide}`" 
          :subSlide="subSlide"></component>
      </transition>
    </div>
    
    <div v-if="showSlideNumber" class="slide-slide-number"> {{ slide }}</div>

    <div v-if="showControls" class="slide-nav-button-container">
      <b-button tag="a" :href="previousSlideRoute" @click.prevent="navigateClicked(false)" :disabled="!canNavigateBackward" type="is-link">
      <font-awesome-icon icon="angle-left" size="lg" />
      </b-button>
      <b-button tag="a" :href="nextSlideRoute" @click.prevent="navigateClicked(true)" :disabled="!canNavigateForward" type="is-link">
        <font-awesome-icon icon="angle-right" size="lg" />
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import store from "@/store";

library.add(faAngleRight);
library.add(faAngleLeft);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class PresentationContainer extends Vue {
  @Prop({ default: true, type: Boolean }) public showSlideNumber!: number;
  @Prop({ default: true, type: Boolean }) public showControls!: boolean;

  public transitionName: string = "fade";

  public get slide(): number {
    return store.getters.slides.currentSlide;
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
  public get canNavigateForward(): boolean {
    return store.getters.slides.canNavigateForward;
  }
  public get canNavigateBackward(): boolean {
    return store.getters.slides.canNavigateBackwards;
  }

  public async slideClicked(event: MouseEvent) {
    const elementX = event.x;
    if (event.srcElement === null) {
      return;
    }
    const elementWidth = (event.srcElement as HTMLElement).clientWidth;
    const clickRatio = elementX / elementWidth;
    const newUrl = await store.dispatch.slides.navigateSubSlide({forward: clickRatio >= .5});
    this.navigateToNewPath(newUrl);
  }

  public async navigateClicked(forward: boolean) {
    const newUrl = await store.dispatch.slides.navigateOne({ forward });
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
@import '../styles/bulma.customize.scss';

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .slide-container {
    font-size: 28px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .slide-container {
    font-size: 28px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .slide-container {
    font-size: 32px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .slide-container {
    font-size: 36px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .slide-container {
    font-size: 40px;
  }
}

.presentation-container {
  position: relative;
  height: calc(100vh - #{$navbar-height});
  user-select: none;
}

.slide-nav-button-container {
  position: fixed;
  bottom: 35px;
  right: 35px;
}

.slide-slide-number {
  position: fixed;
  bottom: 35px;
  left: 35px;
}

.full-height-slide {
  height: calc(100vh - #{$navbar-height});
}

$transition-duration: 1s;

.fade-enter-active, .fade-leave-active {
  transition: opacity $transition-duration;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.fade-enter,.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active {
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

.slide-right-enter-active, .slide-right-leave-active {
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
