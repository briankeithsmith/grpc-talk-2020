<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
          <section>
            <h1 class="title">GRPC &amp; Protobuf</h1>
            <h4 class="subtitle">Intro to next generation inter-service communication protocol</h4>
          </section>
          <section>
              Adam Vaden 
              <b-button type="primary" tag="a" href="https://github.com/abvaden">
                <font-awesome-icon :icon="['fab','github']"></font-awesome-icon>
              </b-button>
              <b-button type="primary" tag="a" href="mailto:adam@v2tools.com">
                  <span class="icon">
                    <font-awesome-icon icon="envelope"></font-awesome-icon>
                  </span>
                  adam@v2tols.com
              </b-button>
          </section>
      </div>
    </div>
    <div class="hero-foot">
          <div class="container">
              Adam Vaden : adam@v2tools.com
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubAlt, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub);
library.add(faGithubAlt);
library.add(faGithubSquare);
library.add(faEnvelope);

@Component({
    components: {
        FontAwesomeIcon
    }
})
export default class Slide1 extends Vue {

}
</script>

<style lang="scss" scoped>
</style>