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
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.styling {
  margin-top: 1em;
  margin-left: 1em;
  text-align: center;
  background-color: floralwhite;
  border-radius: 1.5em;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.2);
  width: 19em;
  height: 12em;
}
.space {
  margin-top: 40vh;
  margin-left: 5vw;
}

@media only screen and (max-width: 1280px) {
  .space {
    margin-top: 15vh;
    margin-left: 10vw;
  }
}
@media only screen and (max-width: 1200px) {
  .space {
    margin-top: 15vh;
    margin-left: -3vw;
  }
}
@media only screen and (max-width: 960px) {
  .space {
    margin-top: 20vh;
    margin-left: 8vw;
  }
}
@media only screen and (max-width: 800px) {
  .space {
    margin-top: 20vh;
    margin-left: 9vw;
    margin-bottom: 10em;
  }
}
@media only screen and (max-width: 400px) {
  .space {
    margin-top: 10em;
    margin-left: 1vw;
    margin-top: 10em;
  }
}
@media only screen and (max-width: 900px) and (max-height: 420px) {
  .space {
    margin-left: 12.5vw;
  }
}
@media only screen and (max-width: 940px) and (max-height: 440px) {
  .space {
    margin-left: 15vw;
  }
}
@media only screen and (max-width: 1100px) and (max-height: 820px) {
  .space {
    margin-left: -5vw;
  }
}

@media only screen and (max-width: 820px) and (max-height: 1100px) {
  .space {
    margin-left: 5vw;
  }
}

@media only screen and (max-width: 1040px) and (min-height: 1360px) {
  .space {
    margin-left: -5vw;
  }
}
</style>
