<template>
  <div class="full-height-slide">
    <h1 class="title has-text-centered has-text-primary">Features</h1>

    <div class="tabs is-centered is-boxed is-large">
      <ul>
        <li :class="{'is-active': isTab(1)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': 3, subSlide: tabEnd(1)}}"
          >Code Generation</router-link>
        </li>
        <li :class="{'is-active': isTab(2)}" @click.stop>
          <router-link :to="{ name: 'slides', params: {'silde': 3, subSlide: tabEnd(2)}}">Streaming</router-link>
        </li>
        <li :class="{'is-active': isTab(3)}" @click.stop>
          <router-link
            :to="{ name: 'slides', params: {'silde': 3, subSlide: tabEnd(3)}}"
          >Load Balancing</router-link>
        </li>
        <li :class="{'is-active': isTab(4)}" @click.stop>
          <router-link :to="{ name: 'slides', params: {'silde': 3, subSlide: tabEnd(4)}}">...</router-link>
        </li>
      </ul>
    </div>

    <section>
      <transition name="fade" mode="out-in">
        <div v-if="isTab(1)" key="code-generation">
          <a
            v-if="subSlide >= tabStart(1)"
            class="is-size-1"
            href="https://github.com/protocolbuffers/protobuf/releases"
            target="_blank"
          >Protoc (.proto)</a>
          <div class="content">
            <ul>
              <li v-if="subSlide >= tabStart(1, 1)">Generate code through cli or api</li>
              <li v-if="subSlide >= tabStart(1, 2)">Optional standard library</li>
              <li v-if="subSlide >= tabStart(1, 3)">Composeable</li>
            </ul>
          </div>
        </div>

        <div v-if="isTab(2)" class="content" key="streaming">
          <h4 class="has-text-centered">4 Different RPC Options</h4>
          <div class="columns is-vcentered">
            <div class="column is-narrow">
              <ol>
                <li v-if="subSlide >= tabStart(2, 1)">
                  <h6 :class="{'has-text-primary': subSlide == tabStart(2,1)}">Unary</h6>
                </li>
                <li v-if="subSlide >= tabStart(2, 2)">
                  <h6 :class="{'has-text-primary': subSlide == tabStart(2,2)}">Server Streaming</h6>
                </li>
                <li v-if="subSlide >= tabStart(2, 3)">
                  <h6 :class="{'has-text-primary': subSlide == tabStart(2,3)}">Client Streaming</h6>
                </li>
                <li v-if="subSlide >= tabStart(2, 4)">
                  <h6
                    :class="{'has-text-primary': subSlide == tabStart(2,4)}"
                  >Bidirectional Streaming</h6>
                </li>
              </ol>
            </div>
            <div class="column is-hidden-mobile is-hidden-tablet-only">
              <highlight-code :code="sourceCode" lang="protobuf"></highlight-code>
            </div>
          </div>
        </div>

        <div v-if="isTab(3)" key="load-balancing">
          <div>protoc</div>
        </div>

        <div v-if="isTab(4)" key="...">
          <div>Deadlines</div>
          <div>Cancelation propogation</div>
          <div>Request compression</div>
          <div>TLS / SSL</div>
          <div>Synchronous &amp; Asynchronous</div>
          <div>
            Runtime discoverability -
            <a
              href="https://github.com/fullstorydev/grpcurl"
              target="_blank"
            >grpCurl</a>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import VueHighlightJS from 'vue-highlight.js';
// @ts-ignore
import protobuf from 'highlight.js/lib/languages/protobuf';
import 'highlight.js/styles/atom-one-dark.css';

Vue.use(VueHighlightJS, {
	languages: {
		protobuf,
	}
});

const tabEndRanges = [4, 9, 99, 99];
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
export default class Slide3 extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;

  public isTab(tabNumber: number) {
    return (
      this.subSlide >= this.tabStart(tabNumber) &&
      this.subSlide <= this.tabEnd(tabNumber)
    );
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
</style>