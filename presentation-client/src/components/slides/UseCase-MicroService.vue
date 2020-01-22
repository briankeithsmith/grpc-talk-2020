<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">Use Case</h1>
      <h4 class="subtitle has-text-centered">Microservices</h4>

      <section>
        <div class="columns is-8">
          <div class="column is-4" @click.stop>
            <h4 class="has-text-centered">Timeline</h4>
            <b-slider
              :min="0"
              :max="22"
              ticks
              :tooltip="false"
              v-model="sliderValue"
              @change="sliderChanged"
            ></b-slider>
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
import store from "@/store";
import { Route } from "vue-router";

const stepDefinitions = [
  `Micro service booking setup example call to search service to get bookings for a given area`,
  `Authenticate user`,
  `Simulataneously call to recomendations and adds service`,
  `Recomendation service make simultaneous calls to users and reservations services`,
  `Recomendations process responses and returns to search`,
  `Search calls to comments based on recomendations`,
  `Search aggergrates all results and returns to client`,
  `Client makes call to search service to get available listings with 1.5 (s) deadline`,
  `Search service calls to Authentication service with 1.5 (s) deadline`,
  `Authentication service returns to the search service in 0.1 (s). Search service has 1.4 (s) left to fufill the request`,
  `Search service makes 2 asychronus calls to to the Adds and Recomendations service with a 1.4 (s) deadline`,
  `Recomendation takes 0.2 (s) to process the request 0.3 (s) has elapsed since user made request 1.2 (s) remaining.`,
  `Makes 2 asychronous calls to Reservations and Users service's with 1.2 (s) deadline`,
  `After 0.3 (s) Reservations service responds, recomentations service still waiting for response from Users service`,
  `After 0.1 (s) Users service responds for a total call time of 0.4 (s)`,
  `Recomendations service responds to serarch service with a batch of recomendations total time elapsed is not 0.7 (s)`,
  `Search service calls to comments service with 0.8 (s) deadline`,
  `Comments service responds in 0.3 (s) there are now 0.5 (s) left in the users original deadline`,
  `Since there are 0.5 (s) remaining serach service can now request another batch of recomentaions with a 0.5 (s) deadline`,
  `Recomendations service process request and makes calls to Reservations and users service with 0.5 (s) deadline`,
  `After 0.1 (s) more the adds service responds with the adds to be included leaving 0.4 (s) left in the original deadline`,
  `Search service decides to cancel recomendations request and return early to user, cancelation is propogated to users and reservations`,
  `Search service responds in 1.2 (s)`
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

</style>