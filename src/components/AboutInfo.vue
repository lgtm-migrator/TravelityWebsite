<template>
  <v-container fluid>
    <v-row class="justify-space-around">
      <v-cols cols="12" align="center" style="position: relative">
        <v-card
          class="styling_for_topic"
          elevation="4"
          v-for="option in options"
          :key="option.value"
          @click="showOrhide(value, hideOrShow)"
        >
          <v-card-text> {{ option.header }} </v-card-text>
        </v-card>
      </v-cols>
      <v-card
        class="styling_for_text"
        v-for="option in options"
        :key="option.value"
        v-show="option.hideOrShow"
      >
        <v-card-text>
          {{ option.text }}
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          header: "Who are we?",
          text:
            "Well for a short answer we are Travelity your helper! And for the longer answer,we are those who help you with your travels, help you to remember the small and the big things you may forget.",
          value: 1,
          hideOrShow: true,
        },
        {
          header: "Why use us?",
          text:
            "For some simple reasons. We help you from the small details to the larger nothing is forgotten because of us, nor is the memoirs you had of your holiday we remember, so you don't forget",
          value: 2,
          hideOrShow: false,
        },
        {
          header: "Your first time?",
          text:
            "If yes, let's start with a Welcome! And if no, then welcome back! Now let's make your trip a lot easier for you and let's not forget the first time you used our services to help you",
          value: 3,
          hideOrShow: false,
        },
        {
          header: "Did someone say app?",
          text:
            "Uh, yes, someone said that. This is something that's also smart about us, we work best on the fly, so why not use your mobile to do so. We provide our best experience you want on an app.",
          value: 4,
          hideOrShow: false,
        },
        {
          header: "Ready for your next travel-ity?",
          text:
            "If yes. Great, let's make a memoir that you can't forget because of us, Travelity! Only the best for our users. Travel with a plan",
          value: 5,
          hideOrShow: false,
        },
      ],
    };
  },
  methods: {
    showOrhide() {
      if (this.options.hideOrShow == true) {
        this.options.hideOrShow = false;
        console.log(this.options.value);
        console.log(this.options.hideOrShow);
      } else {
        this.options.hideOrShow = true;
        console.log(this.options.value);
        console.log(this.options.hideOrShow);
        console.log(this.options);
      }
      return this.options.hideOrShow;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.styling_for_topic {
  margin-bottom: 0.5em;
  margin-left: 3em;
  cursor: pointer;
  text-align: center;
  background-color: floralwhite;
  border-radius: 1.5em;
  width: 10em;
  height: 5em;
  transition: 0.5s;
}
.styling_for_topic:hover {
  width: 11em;
}

.styling_for_text {
  margin-top: 8.5em;
  margin-left: 1em;
  text-align: center;
  background-color: floralwhite;
  border-radius: 1.5em;
  width: 17.5em;
  height: 10em;
}
</style>
