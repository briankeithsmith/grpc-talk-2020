<template>
  <div class="full-height-slide">
    <h1 class="title has-text-centered has-text-primary">Use Case</h1>
    <h4 class="subtitle has-text-centered">Microservices</h4>

    <div class="columns is-desktop">
      <div class="column is-5">
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MicroServiceDemoSVG from "@/components/slides/grpc/MicroServiceDemoSVG.vue";
import store from "@/store";
import { Route } from "vue-router";

const stepDefinitions = [
  `Micro service hotel booking example. Client calls a search api to get available bookings for a given area`,
  `Search service makes call to Authentication service to authenticate user`,
  `Search simulataneously calls to Recommendation and Adds service`,
  `Recommendation service make simultaneous calls to Users and Reservations services`,
  `Recommendation service processes responses from Users and Reservations services and returns`,
  `Search calls to Comments service to get top comments for the recommendations`,
  `Search aggregates all results and returns to client`,
  `Client makes call to Search service to get available listings and specifies a 1.5 (s) deadline`,
  `Search service authenticates user by calling the Authentication service with 1.5 (s) deadline`,
  `Authentication service returns to the Search service in 0.1 (s). Search service has 1.4 (s) remaining in the deadline provided with the request`,
  `Search service makes 2 asynchronous calls to the Adds and Recommendations service with a 1.4 (s) deadline`,
  `Recommendation takes 0.2 (s) to process the request 0.3 (s) has elapsed since user made request 1.2 (s) remaining`,
  `Makes 2 asychronous calls to Reservations and Users services with 1.2 (s) deadline`,
  `After 0.3 (s) the Reservations service responds. Recommendation service still waiting for response from Users service`,
  `After another 0.1 (s) Users service responds. Recommendations service can now aggregrate the results from Users and Reservations to filter out reservations`,
  `Recommendations service responds to Search service with a batch of recommendations, 0.7 (s) of the time budget has elapsed`,
  `Search service calls to Comments service with 0.8 (s) deadline to get top comments for results`,
  `Comments service responds in 0.3 (s) Search service is now only waiting on Adds service`,
  `With 0.5 (s) remaining Search service can now request another batch of recommendation with a 0.5 (s) deadline`,
  `Recommendations repeats previous process and makes requests to Reservations and Users services`,
  `After 0.1 (s) the Adds service responds with the adds to be included leaving 0.4 (s) left in the original time budget`,
  `Search service decides to cancel the call to Recommendations service and return early to user, cancellation is propogated to users and reservations`,
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