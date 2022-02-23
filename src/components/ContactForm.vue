<template>
  <v-form ref="form" @submit.prevent="submit">
    <v-text-field name="name" :value="name" v-model="name"></v-text-field>
    <v-text-field name="email" :value="email" v-model="email"></v-text-field>
    <v-text-field
      name="honey"
      class="honey"
      :value="honey"
      v-model="honey"
    ></v-text-field>
    <v-textarea name="message" :value="message" v-model="message"></v-textarea>
    <v-btn v-on:click.prevent="reset(event)">Submit</v-btn>
  </v-form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import axios from "axios";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ name: "", email: "", message: "", honey: "" }),
  validations() {
    return {
      name: { required },
      email: { required },
      message: { required },
    };
  },

  methods: {
    async submit() {
      console.log(this.v$);
      const result = await this.v$.$validate();
      if (result && this.honey === "") {
        console.log("Submitted");
      } else {
        console.log("Form submitted had an error");
      }
    },

    reset: function (event) {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.honey {
  display: none;
}
</style>
