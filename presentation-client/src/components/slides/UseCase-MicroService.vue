<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary is-size-1">Use Case</h1>
      <h4 class="subtitle has-text-centered is-size-4">Microservices</h4>

    <section>
    </section>
      <section>
        <div class="columns is-8">
          <div class="column is-4" @click.stop>
              <b-slider :min="0" :max="21" ticks :tooltip="false" v-model="sliderValue" @change="sliderChanged"></b-slider>
              <p>{{ stepSummary }}</p>
          </div>
          <div class="column">
            <MicroServiceDemoSVG :subSlide="subSlide" />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MicroServiceDemoSVG from "@/components/slides/MicroServiceDemoSVG.vue";
import store from '@/store';
import { Route } from 'vue-router';

const stepDefinitions = [
  `Micro service booking setup example call to search service to get bookings for a given area`,
  `Authenticate user`,
  `Simulataneously call to recomendations and adds service`,
  `Recomendation service make simultaneous calls to users and reservations services`,
  `Recomendations process responses and returns to search`,
  `Search calls to comments based on recomendations`,
  `Search aggergrates all results and returns to client`,
  `Client makes call to search service with 1.5 second deadline`,
  `9`,
  `10`,
  `11`,
  `12`,
  `13`,
  `14`,
  `15`,
  `16`,
  `17`,
  `18`,
  `19`,
  `20`,
  `21`,
  `22`,
  `23`,
];

@Component({
  components: {
    MicroServiceDemoSVG
  }
})
export default class UseCasesMicroService extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;

  public get stepSummaries() {
    return stepDefinitions;
  }
  public get sliderValue() {
      return this.subSlide;
  }
  public set sliderValue(value: number) {
      store.dispatch.slides.navigateSubSlide({ value });
  }
  public get stepSummary() {
      return stepDefinitions[this.subSlide];
  }
  public sliderChanged(value: number): void {
    this.navigateToNewPath(store.getters.slides.currentSlideRoute);
  }

  private async navigateToNewPath(newUrl: string | false): Promise<Route> {
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

<style lang="scss" scoped>
@import 'bulma';
@import 'bulma-extensions/bulma-slider/src/sass';
</style>