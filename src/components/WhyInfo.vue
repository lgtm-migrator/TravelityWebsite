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
          header: "Reminder",
          text:
            "Let's not forget anything. And we will help you with that, let us remind you of important items, so you don't stand at the airport and is missing some of them.",
          value: 1,
        },
        {
          header: "Budget",
          text:
            "Traveling on a budget. Well, say no more, we can help you with that to. Our app has a budget management, so you can keep track of your personal spending's",
          value: 2,
        },
        {
          header: "Plan a trip",
          text:
            "Uh, an app that can help you plan a trip. Well, not really, but we at Travelity wouldn't mind that too, although we will help you with an overlook of what your plan for the trip is your budget, reminders, and even your tickets.",
          value: 3,
        },
        {
          header: "Photo share",
          text:
            'Yes, the old "we take your photos scheme". Well, the only time we "take" your photos is when you allow us, we do not take anything without our' +
            " user's permission. Also this is only to show people how their trip can look like.",
          value: 4,
        },
        {
          header: "This cannot be free?",
          text:
            "Did someone say free? Well it is, it's 100% free no need for a credit card just go in on your app store and get our app, free of charge.",
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
  height: 13em;
}
.space {
  margin-top: 40vh;
  margin-left: 5vw;
}

@media only screen and (max-width: 1280px) {
  .space {
    margin-top: 15em;
    margin-left: 12vw;
  }
}
@media only screen and (max-width: 1200px) {
  .space {
    margin-top: 15em;
    margin-left: -3vw;
  }
}
@media only screen and (max-width: 960px) {
  .space {
    margin-top: 30em;
    margin-left: 8vw;
  }
}
@media only screen and (max-width: 800px) {
  .space {
    margin-left: 9vw;
  }
}
@media only screen and (max-width: 400px) {
  .space {
    margin-left: 1vw;
  }
}

@media only screen and (max-width: 820px) and (max-height: 420px) {
  .space {
    margin-left: 9vw;
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
@media only screen and (max-width: 840px) and (max-height: 1200px) {
  .space {
    margin-top: 20vh;
  }
}

@media only screen and (max-width: 820px) and (max-height: 1100px) {
  .space {
    margin-left: 5vw;
  }
}

@media only screen and (max-width: 1100px) and (max-height: 820px) {
  .space {
    margin-left: -5vw;
  }
}

@media only screen and (max-width: 1040px) and (min-height: 1380px) {
  .space {
    margin-left: -5vw;
  }
}
</style>
