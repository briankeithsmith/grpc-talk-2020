<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">Technical Details</h1>
      <h4 class="subtitle has-text-centered">Library Structure</h4>
    </div>

    <div class="container">
      <section>
        <div class="content">
          <ol>
            <li v-if="subSlide >= 1">
              Client code fully generated
              <ul>
                <li>Create channel to server</li>
                <li>Bind multiple clients to channel</li>
              </ul>
            </li>
            <li v-if="subSlide >= 2">Server code generates stubs
              <ul>
                <li>Generated code contains "abstract" methods for every rpc in each service</li>
                <li>Multiple services combined into a server</li>
                <li>Server configured to listen for incoming connections</li>
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
export default class TechnicalDetailsLibraryStructure extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>