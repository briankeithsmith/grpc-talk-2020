<template>
  <section class="hero is-fullheight-with-navbar is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="title">Demo</div>
        <div class="subtitle">Coming soon</div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import store from "@/store";

@Component({
  components: {}
})
export default class Demo extends Vue {}
</script>

<style lang="scss" scoped>
</style>