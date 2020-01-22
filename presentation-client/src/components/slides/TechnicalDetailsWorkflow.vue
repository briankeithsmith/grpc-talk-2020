<template>
  <section class="full-height-slide">
    <div class="container">
      <h1 class="title has-text-centered has-text-primary">Technical Details</h1>
      <h4 class="subtitle has-text-centered">Workflow</h4>
    </div>

    <div class="container">
      <section>
        <div class="content">
            <ol>
                <li v-if="subSlide >= 1">Create .proto files defining messges and services</li>
                <li v-if="subSlide >= 2">Use protoc to generate source client and server source code stubs</li>
                <li v-if="subSlide >= 3">Implement server stubs</li>
                <li v-if="subSlide >= 4">Profit</li>
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