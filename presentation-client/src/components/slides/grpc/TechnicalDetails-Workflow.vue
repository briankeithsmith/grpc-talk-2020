<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">Technical Details</h1>
      <h4 class="subtitle has-text-centered">Workflow</h4>
    </div>

    <div class="container">
      <section>
        <div class="content">
          <h5 class="has-text-primary">Server</h5>
          <ol>
            <li v-if="subSlide >= 1">Create .proto files defining messages and services</li>
            <li
              v-if="subSlide >= 2"
            >Use protoc to generate source client and server source code stubs</li>
            <li v-if="subSlide >= 3">Implement server stubs</li>
            <li v-if="subSlide >= 4">Create channel</li>
          </ol>
          <h5 class="has-text-primary" v-if="subSlide >= 5">Client</h5>
          <ol>
            <li v-if="subSlide >= 6">Compile .proto files using protoc to generate clients</li>
            <li
              v-if="subSlide >= 7"
            >Create channel to server endpoint</li>
            <li v-if="subSlide >= 8">Instantiate client and bind to channel</li>
            <li v-if="subSlide >= 9">Make rpc calls</li>
          </ol>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TechnicalDetailsWorkflow extends Vue {
  @Prop({ required: false, type: Number, default: 0 }) public subSlide!: number;
}
</script>

<style lang="scss" scoped>
</style>