<template>
  <div class="full-height-slide">
    <h1 class="title has-text-centered has-text-primary">Features</h1>
    <!-- <h4 class="is-size-4 has-text-centered has-text-primary">Features</h4> -->

    <div class="tabs is-centered is-boxed is-large">
      <ul>
        <li :class="{'is-active': isTab(1)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': currentSlideNumber, subSlide: tabEnd(1)}}"
          >Code Generation</router-link>
        </li>
        <li :class="{'is-active': isTab(2)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': currentSlideNumber, subSlide: tabEnd(2)}}"
          >Streaming</router-link>
        </li>
        <li :class="{'is-active': isTab(3)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': currentSlideNumber, subSlide: tabEnd(3)}}"
          >Load Balancing</router-link>
        </li>
        <li :class="{'is-active': isTab(4)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': currentSlideNumber, subSlide: tabEnd(4)}}"
          >...</router-link>
        </li>
      </ul>
    </div>

      <transition name="fade" mode="out-in">
        <div v-if="isTab(1)" key="code-generation" class="container">
          <a
            v-if="subSlide >= tabStart(1)"
            class="is-size-4"
            href="https://github.com/protocolbuffers/protobuf/releases"
            target="_blank"
          >Protoc (.proto)</a>
          <div class="content">
            <ul>
              <li v-if="subSlide >= tabStart(1, 1)">Generate code through cli or api</li>
              <li v-if="subSlide >= tabStart(1, 2)">Optional standard library</li>
              <li v-if="subSlide >= tabStart(1, 3)">Composable</li>
            </ul>
          </div>
        </div>

        <div v-if="isTab(2)" class="content" key="streaming">
          <h4 class="has-text-centered">4 Different RPC Options</h4>
          <div class="columns is-vcentered is-desktop">
            <div class="column is-4">
              <ol>
                <li v-if="subSlide >= tabStart(2, 1)">
                  <span
                    class="is-size-6"
                    :class="{'has-text-primary': subSlide == tabStart(2,1)}"
                  >Unary</span>
                </li>
                <li v-if="subSlide >= tabStart(2, 2)">
                  <span
                    class="is-size-6"
                    :class="{'has-text-primary': subSlide == tabStart(2,2)}"
                  >Server Streaming</span>
                </li>
                <li v-if="subSlide >= tabStart(2, 3)">
                  <span
                    class="is-size-6"
                    :class="{'has-text-primary': subSlide == tabStart(2,3)}"
                  >Client Streaming</span>
                </li>
                <li v-if="subSlide >= tabStart(2, 4)">
                  <span
                    class="is-size-6"
                    :class="{'has-text-primary': subSlide == tabStart(2,4)}"
                  >Bidirectional</span>
                </li>
              </ol>
            </div>
            <div class="column">
              <highlight-code
                class="my-code"
                v-if="subSlide >= tabStart(2, 1)"
                :code="sourceCode"
                lang="protobuf"
              ></highlight-code>
            </div>
          </div>
        </div>

        <div v-if="isTab(3)" key="load-balancing">
          <section>
            <div class="container has-text-centered">
              <a
                class="is-size-4 has-text-link"
                href="https://github.com/grpc/grpc/blob/master/doc/load-balancing.md"
                target="_blank"
              >Documentation</a>
            </div>
          </section>
          <section>
            <div class="columns">
              <div class="column">
                <div class="content">
                  <ul>
                    <li v-if="subSlide >= tabStart(3,1)">Proxy Based</li>
                    <li v-if="subSlide >= tabStart(3,2)">Thick Client</li>
                    <li
                      v-if="subSlide >= tabStart(3,3)"
                      class="has-text-weight-bold"
                    >Lookaside / External</li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <img v-if="subSlide === tabStart(3,3)" src="@/assets/slides/load-balancing.png" />
              </div>
            </div>
          </section>
        </div>

        <div v-if="isTab(4)" key="...">
          <div class="container">
            <div class="content">
              <ul>
                <li v-if="subSlide >= tabStart(4,0)">Deadlines</li>
                <li v-if="subSlide >= tabStart(4,1)">Cancellation Propogation</li>
                <li v-if="subSlide >= tabStart(4,2)">Request Compression</li>
                <li v-if="subSlide >= tabStart(4,3)">TLS / SSL</li>
                <li v-if="subSlide >= tabStart(4,4)">Synchronous &amp; Asynchronous</li>
                <li v-if="subSlide >= tabStart(4,5)">Observability</li>
                <li v-if="subSlide >= tabStart(4,6)">Mature Ecosystem</li>
                <li v-if="subSlide >= tabStart(4,7)">
                  Runtime discoverability -
                  <a
                    href="https://github.com/fullstorydev/grpcurl"
                    target="_blank"
                  >grpCurl</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "@/store";

import VueHighlightJS from "vue-highlight.js";
// @ts-ignore
import protobuf from "highlight.js/lib/languages/protobuf";

Vue.use(VueHighlightJS, {
  languages: {
    protobuf
  }
});

const tabEndRanges = [4, 9, 13, 99];
const unaryCode = `
rpc SayHello(HelloRequest) 
    returns (HelloResponse) { }`;
const serverStreamCode = `
rpc LotsOfReplies(HelloRequest) 
    returns (stream HelloResponse) { }`;
const clientStreamCode = `
rpc LotsOfGreetings(stream HelloRequest) 
    returns (HelloResponse) { }`;
const biDiCode = `
rpc BidiHello(stream HelloRequest) 
    returns (stream HelloResponse) { }`;

@Component
export default class FeaturesSlide extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;

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

  public get sourceCode(): string {
    if (this.subSlide === this.tabStart(2, 1)) {
      return unaryCode;
    } else if (this.subSlide === this.tabStart(2, 2)) {
      return serverStreamCode;
    } else if (this.subSlide === this.tabStart(2, 3)) {
      return clientStreamCode;
    } else if (this.subSlide === this.tabStart(2, 4)) {
      return biDiCode;
    } else {
      return "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/code.scss";
</style>