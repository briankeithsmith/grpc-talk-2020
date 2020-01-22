<template>
  <div class="full-height-slide">
    <h1 class="title has-text-centered has-text-primary">Limitations</h1>
    <div class="section container">
      <div class="content">
        <ul>
          <li v-if="subSlide >= 0">Http 2.0 Based</li>
          <li v-if="subSlide >= 1">Bulky Client Libraries</li>
          <li v-if="subSlide >= 2">Not Human Readable</li>
          <li v-if="subSlide >= 3">Web
              <ul>
                  <li v-if="subSlide >= 4">Missing Bid Streaming</li>
                  <li v-if="subSlide >= 5">Bulky Client Libraries <a href="/report.html">sample</a></li>
                  <li v-if="subSlide >= 6">Can Require Extra Infrastructure</li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LimitationsSlide extends Vue {
    @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>