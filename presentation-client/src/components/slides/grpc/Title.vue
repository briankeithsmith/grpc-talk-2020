<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">GRPC &amp; Protobuf</h1>
        <h4 class="subtitle">Intro to next generation inter-service communication protocol</h4>
        <div class="level section">
          <div class="buttons level-item">
            <a type="text" href="mailto:adam@v2tools.com" class="button" target="_blank">
              <span class="icon">
                <font-awesome-icon icon="envelope"></font-awesome-icon>
              </span>
              <span>adam@V2Tools.com</span>
            </a>
            <a href="https://github.com/abvaden" class="button" target="_blank">
              <span class="icon">
                <font-awesome-icon :icon="['fab','github']" size="lg"></font-awesome-icon>
              </span>
              <span>@abvaden</span>
            </a>
            <a href="https://www.linkedin.com/in/adam-vaden-4a77057b/" class="button">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
              </span>
              <span>Adam Vaden</span>
            </a>
            <a href="https://v2tools.com" class="button" target="_blank">
              <span class="icon">
                <font-awesome-icon icon="globe"></font-awesome-icon>
              </span>
              <span>V2Tools.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import individually since component is in an async bundle it is not tree shaken
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import store from "@/store";

library.add(faGithub);
library.add(faGlobe);
library.add(faEnvelope);
library.add(faLinkedin);

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class TitleSlide extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>