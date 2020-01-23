<template>
  <div class="full-height-slide">
      <h1 class="title has-text-centered has-text-primary">Use Case</h1>
      <h4 class="subtitle has-text-centered">Versioning</h4>
    
      <div class="tabs is-boxed is-large is-centered is-mobile">
        <ul>
          <li :class="{'is-active': isTab(1)}">
            <router-link tag="a" :to="{name: 'slides', params: { slide: currentSlide.name, subSlide: tabEnd(1)}}">
              <span class="icon is-small">v1</span>
              <span>Service Versioning</span>
            </router-link>
          </li>
          <li :class="{'is-active': isTab(2)}">
            <router-link tag="a" :to="{name: 'slides', params: { slide: currentSlide.name, subSlide: tabEnd(2)}}">
              <span class="icon is-small">v2</span>
              <span>Message Versioning</span>
            </router-link>
          </li>
          <!-- <li :class="{'is-active': isTab(3)}">
            <router-link tag="a" :to="{name: 'slides', params: { slide: currentSlide.name, subSlide: tabEnd(3)}}">
              <span class="icon is-small">v3</span>
              <span>Service Versions</span>
            </router-link>
          </li> -->
          <!-- <li :class="{'is-active': isTab(4)}">
            <router-link tag="a" :to="{name: 'slides', params: { slide: currentSlide.name, subSlide: tabEnd(4)}}">
              <span class="icon is-small">v4</span>
              <span>Service Versions</span>
            </router-link>
          </li> -->
        </ul>
      </div>

      <section v-if="isTab(1)">
        <div class="content">
          <ul>
            <li>Single server can implement multiple services</li>
          </ul>
        </div>
        <highlight-code class="my-code" :code="sourceCode(0)" v-if="subSlide === tabStart(1,0)" lang="protobuf"></highlight-code>
        <highlight-code class="my-code" :code="sourceCode(1)" v-if="subSlide === tabStart(1,1)" lang="protobuf"></highlight-code>
      </section>

      <section v-if="isTab(2)">
        <highlight-code class="my-code" :code="sourceCode(2)" lang="protobuf" v-if="subSlide === tabStart(2,0)"></highlight-code>
        <highlight-code class="my-code" :code="sourceCode(3)" lang="protobuf" v-if="subSlide === tabStart(2,1)"></highlight-code>
      </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from '@/store';
import VueHighlightJS from "vue-highlight.js";
// @ts-ignore
import protobuf from "highlight.js/lib/languages/protobuf";
import "highlight.js/styles/atom-one-dark.css";

Vue.use(VueHighlightJS, {
  languages: {
    protobuf
  }
});

const sourceCodeServiceVersions = `
service FeatureServicev1 {
  rpc GetFeatures (FeatureRequest) returns (FeaturesResponse);
  rpc GetFeatureDetail (Feature) returns (FeatureDetail);
}
`;

const sourceCodeServiceVersions2 = `
service FeatureServicev1 {
  rpc GetFeatures (FeatureRequest) returns (FeaturesResponse);
  rpc GetFeatureDetail (Feature) returns (FeatureDetail);
}

service FeatureServicev2 {
  rpc GetFeatures (FeatureRequest) returns (stream Feature);
  rpc GetFeatureDetail (Feature) return (FeatureDetail);
}`;

const sourceCodeMessageVersion = `
message FeatureRequest {
  string region = 1;
}
message FeatureRequest {
  float latitude = 3;
  float longitude = 4;
}
service FeatureService {
  rpc GetFeatures (FeatureRequest) returns (Feature);
}`;
const sourceCodeMessageVersion2 = `
message FeatureRequest {
  string region = 1;
  float latitude = 2;
  float longitude = 3;
  float radius = 4;
}
message FeatureRequest {
  float latitude = 3;
  float longitude = 4;
}
service FeatureService {
  rpc GetFeatures (FeatureRequest) returns (Feature);
}`;

const sourceCode = [
  sourceCodeServiceVersions,
  sourceCodeServiceVersions2,
  sourceCodeMessageVersion,
  sourceCodeMessageVersion2,
];
const tabEndRanges = [2, 4];

@Component({})
export default class UseCaseVersioning extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;

  public get currentSlide() {
    return store.getters.slides.currentSlide;
  }

  public sourceCode(index: number): string {
    return sourceCode[index];
  }

  public isTab(tabNumber: number) {
    return (
      this.subSlide >= this.tabStart(tabNumber) &&
      this.subSlide <= this.tabEnd(tabNumber)
    );
  }

  public get currentSlideNumber() {
      return store.getters.slides.currentSlide;
  }

  public tabEnd(tabNumber: number) {
    return tabEndRanges[tabNumber - 1];
  }

  public tabStart(tabNumber: number, offset?: number) {
    if (tabNumber === 1) {
      return 0 + (offset ? offset : 0) + 1;
    }
    return tabEndRanges[tabNumber - 2] + 1 + (offset ? offset : 0);
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/code.scss";
</style>