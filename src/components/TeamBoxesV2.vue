<template>
  <div class="tile-container">
    <div v-for="(k, item) in persons" :key="k" :class="'tile ' + 'person-' + item">
      <p>{{ k.name }}</p>
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
          description: '',
          socials: [
            {
              twitter: '',
              facebook: '',
              instagram: '',
              github: '',
            },
          ],
        },
        {
          name: 'Owen',
          description: '',
          socials: [
            {
              twitter: '',
              facebook: '',
              instagram: '',
              github: '',
            },
          ],
        },
        {
          name: 'Manish',
          description: '',
          socials: [
            {
              twitter: '',
              facebook: '',
              instagram: '',
              github: '',
            },
          ],
        },
        {
          name: 'Nikolaj',
          description: '',
          socials: [
            {
              twitter: '',
              facebook: '',
              instagram: '',
              github: '',
            },
          ],
        },
        {
          name: 'Nirakash',
          description: '',
          socials: [
            {
              twitter: '',
              facebook: '',
              instagram: '',
              github: '',
            },
          ],
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
