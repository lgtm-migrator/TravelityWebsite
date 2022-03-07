<template>
  <!-- <div class="tile-container">
    <div v-for="(k, item) in persons" :key="k" :class="'tile ' + 'person-' + item">
      <p>{{ k.name }}</p>
    </div>
  </div> -->
  <v-row>
    <template v-for="(item, n) in persons" :key="n">
      <v-col>
        <v-card class="pa-2" outlined tile>
          <v-img :src="item.image" cover height="200px"></v-img>
          <v-card-title v-text="item.name"></v-card-title>
          <v-card-actions>
            <v-btn
              size="small"
              icon="mdi-github"
              :href="item.socials.github"
            ></v-btn> </v-card-actions
        ></v-card>
      </v-col>
      <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
    </template>
  </v-row>
</template>

<script>
import gsap from 'gsap';
export default {
  created() {},
  data() {
    return {
      persons: [
        {
          name: 'Lukas',
          image: '/src/assets/person0.png',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum saepe cupiditate natus dicta, harum quas, eum blanditiis enim delectus minima sapiente nobis consequuntur explicabo! Corporis recusandae culpa dolorum sequi adipisci.',
          socials: {
            github: 'https://github.com/Slash1y',
          },
        },
        {
          name: 'Manish',
          image: '/src/assets/person1.png',
          description: '',
          socials: {
            github: 'https://github.com/Manish946',
          },
        },
        {
          name: 'Nikolaj',
          image: '/src/assets/person2.png',
          description: '',
          socials: {
            github: 'https://github.com/Nicolaj-S',
          },
        },
        {
          name: 'Nirakash',
          image: '/src/assets/person3.png',
          description: '',
          socials: {
            github: 'https://github.com/CyberNira',
          },
        },
        {
          name: 'Owen',
          image: '/src/assets/person4.png',
          description: '',
          socials: {
            github: 'https://github.com/RiceBoyy',
          },
        },
      ],
    };
  },

  mounted() {},
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import 'vuetify/lib/styles/settings/_variables.scss';
.tile-container {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  user-select: none;
}

@media #{map-get($display-breakpoints, 'xs')} {
  .tile-container {
    flex-direction: row;
  }
}

.tile {
  width: 400px;
  height: 400px;
  max-width: 100%;
  margin: 4px;
  cursor: pointer;
  display: inline-block;
}

@media #{map-get($display-breakpoints, 'xs')} {
  .tile {
    width: 50%;
    height: 300px;
  }
}

// @for $i from 0 through 4 {
//   .person-#{$i} {
//     background: center 10% no-repeat white;
//     background-size: auto;
//     opacity: 1;
//     background-image: url('/src/assets/person#{$i}.png');
//   }
// }
</style>
