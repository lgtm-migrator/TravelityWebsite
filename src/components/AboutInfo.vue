<template>
  <v-container fluid>
    <v-row class="space">
      <div v-for="option in options" :key="option.value">
        <v-card class="styling">
          <v-card-title class="justify-center">
            <div class="text-center">
              <h5>{{ option.header }}</h5>
            </div>
          </v-card-title>
          <v-card-text>
            {{ option.text }}
          </v-card-text>
        </v-card>
      </div>
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
        },
        {
          header: "Why use us?",
          text:
            "For some simple reasons. We help you from the small to the larger details nothing is forgotten because of us, nor is the memoirs you had of your holiday we remember, so you don't forget",
          value: 2,
        },
        {
          header: "Your first time?",
          text:
            "Let's start with a Welcome! And if no, then welcome back! Now let's make your trip a lot easier for you and let's not forget the first time you used our services to help you",
          value: 3,
        },
        {
          header: "Did someone say app?",
          text:
            "Yes, someone said that. This is something that's also smart about us, we work best on the fly, so why not use your mobile to do so. We provide our best experience you want on our app.",
          value: 4,
        },
        {
          header: "Ready for your next travel-ity?",
          text:
            "If yes. Great, let's make a memoir that you can't forget because of us, Travelity! Only the best for our users. Travel with a plan",
          value: 5,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.styling {
  margin-top: 1em;
  margin-left: 1em;
  text-align: center;
  background-color: floralwhite;
  border-radius: 1.5em;
  width: 19em;
  height: 12em;
}
.space {
  margin-left: 7.4vw;
}
</style>
