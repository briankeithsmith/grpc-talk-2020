<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">Technical Details</h1>
      <h4 class="subtitle has-text-centered">Wire Format</h4>
    </div>

    <div class="container">
      <section>
        <div class="content">
            <ol>
                <li v-if="subSlide >= 1">Binary Format <a href="https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md" target="_blank">(ABNF)</a></li>
                <li v-if="subSlide >= 2">HTTP 2.0 Framings</li>
                <li v-if="subSlide >= 3">Optional message encodings</li>
                <li v-if="subSlide >= 4">Optional Transports
                    <ul>
                        <li>Web</li>
                        <li>Domain sockets (wip)</li>
                        <li>Interprocess (wip)</li>
                    </ul>
                </li>
            </ol>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TechnicalDetailsWireFormat extends Vue {
    @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>