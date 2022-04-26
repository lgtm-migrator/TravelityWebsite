<template>
  <v-form
    class="form d-flex flex-column align-start"
    align="end"
    ref="form"
    @submit="submit"
  >
    <v-text-field
      label="Name"
      name="name"
      type="text"
      :rules="[rules.requiredName]"
      :counter="0"
      :value="name"
      v-model="name"
      class="inputWidth"
    ></v-text-field>
    <v-text-field
      name="email"
      :rules="[rules.requiredEmail, rules.email]"
      :value="email"
      v-model="email"
      label="Email"
      class="inputWidth"
    ></v-text-field>
    <v-text-field
      name="honey"
      class="honey"
      :value="honey"
      v-model="honey"
    ></v-text-field>
    <v-textarea
      name="message"
      :rules="[rules.requiredMessage, rules.counter]"
      counter
      :value="message"
      v-model="message"
      label="Message"
      class="inputWidth"
      no-resize
    ></v-textarea>
    <v-btn
      :loading="loading"
      max-width="25%"
      width="100%"
      :disabled="loading"
      type="submit"
      @submit.prevent="loader = 'loading'"
      >Send
    </v-btn>
  </v-form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { email, required, maxLength } from '@vuelidate/validators';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    name: '',
    email: '',
    message: '',
    honey: '',
    formUrl:
      'https://script.google.com/macros/s/AKfycbyDyRD1oL-GT1U8RYJEmS166j0mYKbG74rM0ljtlqZ1FR9MsYZU/exec',
    rules: {
      // This is a regular expression that checks if the email is valid.
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail';
      },
      requiredName: (value) => !!value || 'Name is required',
      requiredEmail: (value) => !!value || 'Email is required',
      requiredMessage: (value) => !!value || 'Message is required',
      counter: (value) => value.length <= 350 || 'Max 350 characters',
    },
    loading: false,
    loader: null,
  }),
  validations() {
    return {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        maxLength: maxLength(350),
      },
    };
  },

  methods: {
    // This is the code that sends the form data to the server.
    async submit() {
      const result = await this.v$.$validate();
      const formData = new FormData();

      // append field inputs into FormData object
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

      if (result && this.honey === '') {
        // For debugging
        // console.log('Submitted');
        this.loading = true;
        await axios
          .post(this.formUrl, formData)
          .then((_data) => {
            // For debugging
            // console.log(_data);
          })
          .catch((_err) => {
            // Logs the error if it occured.
            console.log(_err);
            this.errorToast();
          });
        this.loading = false;
        this.reset(); // reset method call
        this.successToast();
      } else {
        this.errorToast();
        // For debugging
        // console.log('Form submitted had an error');
      }
    },

    //This is a function that resets the form.
    reset(event) {
      this.$refs.form.reset(); // resets form fields
      this.v$.$reset(); // resets dirty check return
      this.honey = ''; // sets honey fleid to empty, otherwise it will be type null
    },

    //This is a function that creates a toast notification.
    successToast() {
      return createToast(
        {
          title: 'Success!',
          description: 'We successfully received your message!',
        },
        {
          position: 'bottom-right',
          type: 'success',
          timeout: 3000,
          transition: 'slide',
        }
      );
    },

    //This is a function that creates a toast notification.
    errorToast() {
      return createToast(
        {
          title: 'Error!',
          description: 'There was an error sending your message.\nTry again later.',
        },
        {
          position: 'bottom-right',
          type: 'danger',
          timeout: 3000,
          transition: 'slide',
        }
      );
    },
  },
  watch: {
    // Watching loader state change
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
};
</script>

<style lang="scss" scoped>
/*
Form
*/

.honey {
  display: none;
}

.inputWidth {
  width: 100%;
  max-width: 75%;
}

.form {
  font-family: 'Karla', sans-serif;
  width: 100%;
}

/*
Form
*/
</style>
