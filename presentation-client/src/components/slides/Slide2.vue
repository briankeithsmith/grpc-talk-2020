<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">GRPC</h1>
      <h1 class="subtitle has-text-centered">
        <span :class="{'has-text-primary': subSlide === 1}">Contract first</span>,
        <span :class="{'has-text-primary': subSlide === 2}">High performance</span>,
        <span :class="{'has-text-primary': subSlide === 3}">Feature rich</span>,
        <span :class="{'has-text-primary': subSlide === 4}">Run anywhere</span>
        RPC framework
      </h1>
      <div class="tile is-ancestor">
        <div class="tile is-6 is-vertical is-parent">
          <!-- <div class="tile is-child box">
            <p class="title is-size-1">Acronym</p>
            <p>
              <span class="has-text-primary">G</span>RPC
              <br />
              <span class="has-text-primary">R</span>emote
              <br />
              <span class="has-text-primary">P</span>rocedure
              <br />
              <span class="has-text-primary">C</span>all
            </p>
          </div>-->
          <div class="tile is-child box" v-if="subSlide >= 1">
            <p class="title is-size-2" :class="{'has-text-primary': subSlide === 1}">Contract first</p>
            <p>Protocol buffers as an Interface Definition Language (IDL)</p>
          </div>
          <div class="tile is-child box" v-if="subSlide >= 2">
            <p
              class="title is-size-2"
              :class="{'has-text-primary': subSlide === 2}"
            >High Performance</p>
            <div class="content">
                <ul>
                <li><a @click.stop href="https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md">Minimal Wire Format</a></li>
                <li><a @click.stop href="https://grpc.io/docs/guides/benchmarking/">Low Latency</a></li>
                <li><a @click.stop href="https://grpc.io/docs/guides/benchmarking/">High Throughput</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box" v-if="subSlide >= 3">
            <p class="title is-size-2" :class="{'has-text-primary': subSlide === 3}">Feature Rich</p>
            <p>
                Best in class tool chain and supporting libraries
            </p>
          </div>
          <div class="tile is-child box" v-if="subSlide >= 4">
            <p class="title is-size-2" :class="{'has-text-primary': subSlide === 4}">Run anywhere</p>
            <p>
                Official support for most major languages and architectures
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Slide2 extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>