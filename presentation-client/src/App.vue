<template>
  <section>
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <img src="@/assets/slides/grpc-logo.png" alt="GRPC" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{name: 'slides'}">Slides</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{name: 'demo'}">Demo</b-navbar-item>
        <b-navbar-dropdown label="Links">
          <b-navbar-item href="https://grpc.io/docs/quickstart/">Quick Start</b-navbar-item>
          <b-navbar-item href="https://grpc.io/docs">Docs</b-navbar-item>
          <b-navbar-item
            href="https://developers.google.com/protocol-buffers/docs/proto3"
          >ProtoBuf Guide</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light">Join Presentation</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
