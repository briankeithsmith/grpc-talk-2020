<template>
  <div class="presentation-container">
    <div class="slide-container is-fullheight">
      <component :is="`slide-${slideNumber}`"></component>
    </div>
    
    <div v-if="showSlideNumber" class="slide-slide-number"> {{ slideNumber }}</div>

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
  },
})
export default class PresentationContainer extends Vue {
  @Prop({ default: true, type: Boolean }) public showSlideNumber!: number;
  @Prop({ default: true, type: Boolean}) public showControls!: boolean;

  public get slideNumber(): number {
    return store.getters.slides.currentSlide;
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

  public async navigateClicked(forward: boolean) {
    const newUrl = await store.dispatch.slides.navigateOne({forward,});
    if (!newUrl) {
      return;
    }

    const newRoute: any = {};
    Object.assign(newRoute, this.$route);
    newRoute.path = newUrl;
    return this.$router.push(newRoute);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.presentation-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.slide-container {
  display: grid; 
  justify-items: stretch; 
  // align-items: stretch;
  height: 100%; 
  font-size: 34px;
}

.slide-nav-button-container {
  position: absolute;
  bottom: 35px;
  right: 35px;
}

.slide-slide-number {
  position: absolute;
  bottom: 35px;
  left: 35px;
}
</style>
