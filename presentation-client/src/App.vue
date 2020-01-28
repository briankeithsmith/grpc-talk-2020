<template>
  <section>
    <b-navbar class="is-primary is-fixed-top">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <img src="@/assets/grpc-logo-nav.webp" alt="GRPC" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item
          tag="router-link"
          :to="{name: 'slides', params: {'slide': 'Title', 'subSlide': 0}}"
        >Slides</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{name: 'demo'}">Demo</b-navbar-item>
        <b-navbar-dropdown label="More Info">
          <b-navbar-item href="https://grpc.io/docs/quickstart/">GRPC Quick Start</b-navbar-item>
          <b-navbar-item href="https://grpc.io/docs">Docs</b-navbar-item>
          <b-navbar-item
            href="https://developers.google.com/protocol-buffers/docs/proto3"
          >ProtoBuf Guide</b-navbar-item>
          <b-navbar-item href="https://github.com/grpc-ecosystem/awesome-grpc">
            Awesome GRPC
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div" v-if="presentationActive">
          <div class="buttons">
            <template v-if="!isPresenting">
              <template v-if="presentationActive">
              <button
                v-if="!isFollowing.value && !presentationActive.loading"
                class="button is-light"
                :class="{'is-waring': presentationActive.error}"
                :disabled="!presentationActive.value"
                @click="joinPresentationClicked()"
              >Join Presentation</button>
              <button
                v-if="isFollowing.value"
                class="button is-light"
                @click.prevent="stopFollowingClicked()"
              >Leave Presentation</button>
              </template>
              <template v-else>
                
              </template>
            </template>
            <template v-else>
              <button
                class="button is-light"
                disabled
                v-if="isPresenting"
              >Presenting</button>
            </template>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component({
  components: {}
})
export default class App extends Vue {
  public get presentationActive() {
    return store.getters.slides.presentationActive;
  }
  public get isFollowing() {
    return store.getters.slides.isFollowing;
  }
  public get isPresenting() {
    return store.getters.slides.isPresenting;
  }

  public mounted() {
    store.dispatch.slides.checkForActive();
  }

  public async joinPresentationClicked() {
    store.dispatch.slides.joinPresentation();
    if (this.$route.name !== 'slides') {
      await this.$router.push({ name: 'slides' });
    }
  }

  public stopFollowingClicked() {
    store.dispatch.slides.leavePresentation();
  }
}
</script>

<style lang="scss">
</style>
