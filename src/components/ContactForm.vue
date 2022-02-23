<template>
  <form></form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup: () => ({ v$: useVuelidate }),
  data: () => ({ name: "" }),
  validations() {
    return {
      name: { required },
    };
  },

  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        //
      }
    },
  },
};
</script>
