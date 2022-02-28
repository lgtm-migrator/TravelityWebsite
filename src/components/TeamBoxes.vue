<template>
  <div class="tile-container">
    <div v-for="k in persons" :key="k" :class="'tile ' + 'person-' + k"></div>
  </div>
  <div class="page-container">
    <div v-for="i in persons" :key="i" :class="'page ' + 'person-' + i">
      <!-- <img :src="'/src/assets/person' + i + '.png'" /> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  created() {},
  data() {
    return {
      persons: 5,
    };
  },

  mounted() {
    let pages = document.querySelectorAll('.page');
    let tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length; i++) {
      this.addListeners(tiles[i], pages[i]);
    }
  },
  props: {},
  methods: {
    addListeners(tile, page) {
      let root = document.documentElement;
      let body = document.body;

      page.addEventListener('click', function () {
        animateHero(page, tile);
      });
      tile.addEventListener('click', function () {
        animateHero(tile, page);
      });

      function calculatePosition(element) {
        let rect = element.getBoundingClientRect();

        let scrollTop = window.scrollY || root.scrollTop || body.scrollTop || 0;
        let scrollLeft = window.scrollX || root.scrollLeft || body.scrollLeft || 0;

        let clientTop = root.clientTop || body.clientTop || 0;
        let clientLeft = root.clientLeft || body.clientLeft || 0;

        return {
          top: Math.round(rect.top + scrollTop - clientTop),
          left: Math.round(rect.left + scrollLeft - clientLeft),
          height: rect.height,
          width: rect.width,
        };
      }

      function animateHero(fromHero, toHero) {
        let clone = fromHero.cloneNode(true);
        let from = calculatePosition(fromHero);
        let to = calculatePosition(toHero);

        gsap.set([fromHero, toHero], { visibility: 'hidden', opacity: 0 });
        gsap.set(clone, {
          position: 'absolute',
          margin: 0,
        });

        body.appendChild(clone);

        gsap.set(clone, from);
        gsap.to(clone, {
          duration: 0.5,
          x: to.left - from.left,
          y: to.top - from.top,
          width: to.width,
          height: to.height,
          autoRound: false,
          ease: 'Power1.easeOut',
          zIndex: 9999999999999,
          onComplete: onComplete,
        });

        function onComplete() {
          if (toHero.classList.contains('page')) {
            gsap.set(toHero, {
              delay: 0.1,
              duration: 0.5,
              opacity: 1,
              ease: 'Power1.easeIn',
            });
            gsap.set('.page-container', {
              duration: 0.5,
              opacity: 1,
            });
            gsap.set(toHero, {
              visibility: 'visible',
            });
          } else if (toHero.classList.contains('tile')) {
            gsap.set(toHero, {
              delay: 0.1,
              duration: 0.5,
              opacity: 1,
            });
            gsap.set('.page-container', {
              duration: 0.5,
              opacity: 1,
            });
            gsap.set(toHero, {
              visibility: 'visible',
            });
          }
          setTimeout(() => {
            body.removeChild(clone);
          }, 250);
        }
      }
    },
  },
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

.page-container {
  visibility: hidden;
  opacity: 0;
}

.page {
  cursor: pointer;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10000000000;
}

@for $i from 1 through 5 {
  .person-#{$i} {
    background: center 10% no-repeat white;
    background-size: auto;
    opacity: 1;
    background-image: url('../assets/person#{$i}.png');
  }
}
</style>
