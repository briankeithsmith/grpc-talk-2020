<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Password" v-if="!loading">
        <b-input
          type="password"
          :value="password"
          password-reveal
          placeholder="Presentation password"
          required
        ></b-input>
      </b-field>
      <progress class="progress is-large is-primary" max="100" v-if="loading"></progress>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click="onLoginClick()">Submit</button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StartPresentingComponent extends Vue {
    @Prop({ type: Boolean, required: false, default: false}) public loading!: boolean;
    @Prop({ type: Boolean, required: false, default: false}) public error!: boolean;
    @Prop({ type: String, required: false, default: ''}) public errorMessage!: string;


    public password: string = '';

    public onLoginClick() {
        this.$emit('submit', this.password);
    }
}
</script>
