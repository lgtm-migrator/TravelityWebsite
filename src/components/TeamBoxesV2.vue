<template>
  <div class="tile-container">
    <div v-for="(k, item) in persons" :key="k" :class="'tile ' + 'person-' + item">
      <p>{{ k.name }}</p>
      <p>{{ k.description }}</p>
      <a href="">{{ k.socials.twitter }}</a>
    </div>
  </div>
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
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum saepe cupiditate natus dicta, harum quas, eum blanditiis enim delectus minima sapiente nobis consequuntur explicabo! Corporis recusandae culpa dolorum sequi adipisci.',
          socials: {
            twitter: 't',
            instagram: '',
            github: '',
          },
        },
        {
          name: 'Manish',
          description: '',
          socials: {
            twitter: 't',
            instagram: '',
            github: '',
          },
        },
        {
          name: 'Nikolaj',
          description: '',
          socials: {
            twitter: 't',
            instagram: '',
            github: '',
          },
        },
        {
          name: 'Nirakash',
          description: '',
          socials: {
            twitter: '',
            instagram: '',
            github: '',
          },
        },
        {
          name: 'Owen',
          description: '',
          socials: {
            twitter: '',
            instagram: '',
            github: '',
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
.tile-container {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  user-select: none;
}

.tile {
  width: 400px;
  height: 400px;
  max-width: 100%;
  margin: 4px;
  cursor: pointer;
  display: inline-block;
}

@for $i from 0 through 4 {
  .person-#{$i} {
    background: center 10% no-repeat white;
    background-size: auto;
    opacity: 1;
    background-image: url('/src/assets/person#{$i}.png');
  }
}
</style>
