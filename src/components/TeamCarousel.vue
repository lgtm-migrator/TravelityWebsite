<template>
  <div class="slider tile-container">
    <div class="slider-item active">
      <img src="https://via.placeholder.com/400" />
    </div>
    <div class="slider-item tile hero-1">
      <img class="slider-image" src="../assets/lukas.png" />
    </div>
    <div class="slider-item tile"><img src="https://via.placeholder.com/400" /></div>
    <div class="slider-item tile"><img src="https://via.placeholder.com/400" /></div>
    <div class="slider-item tile"><img src="https://via.placeholder.com/400" /></div>
    <span class="slider-control-prev" role="button">
      <img aria-hidden="true" src="../assets/prev.svg" alt="Previous Slide Button" />
    </span>
    <span class="slider-control-next" role="button">
      <img aria-hidden="true" src="../assets/next.svg" alt="Next Slide Button" />
    </span>
    <ol class="slide-indicators">
      <li class="slide-indicator"></li>
      <li class="slide-indicator"></li>
      <li class="slide-indicator"></li>
      <li class="slide-indicator"></li>
      <li class="slide-indicator"></li>
    </ol>
  </div>
  <div class="page-container">
    <div class="page hero-1"><p>HEJ</p></div>
    <div class="page hero-2"></div>
    <div class="page hero-3"></div>
    <div class="page hero-4"></div>
  </div>
</template>
<script>
import gsap from 'gsap';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },

  mounted() {
    const slider = new Slider(document.querySelector('.slider'));
    let pages = document.querySelectorAll('.page');
    let tiles = document.querySelectorAll('.tile');
    for (let i = 0; i < tiles.length; i++) {
      this.addListeners(tiles[i], pages[i]);
    }
  },

  methods: {
    addListeners(tile, page) {
      let root = document.documentElement;
      let body = document.body;
      let sliderImage = document.querySelector('.slider-image');
      page.addEventListener('click', function () {
        animateHero(page, tile);
      });
      tile.addEventListener('click', function () {
        animateHero(tile, page);
        sliderImage.classList.add('slider-image-hide');
        setTimeout(() => {
          sliderImage.classList.remove('slider-image-hide');
        }, 200);
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
          duration: 0.3,
          position: 'absolute',
          margin: 0,
        });

        body.appendChild(clone);

        gsap.set(clone, from);
        gsap.to(clone, {
          duration: 1,
          x: to.left - from.left,
          y: to.top - from.top,
          width: to.width,
          height: to.height,
          autoRound: false,
          opacity: 1,
          ease: 'Power1.easeOut',
          onComplete: onComplete,
        });

        function onComplete() {
          gsap.set(toHero, {
            duration: 1,
            visibility: 'visible',
            backgroundColor: 'white',
            opacity: 1,
            ease: 'Power1.easeIn',
          });
          gsap.set(fromHero, {
            duration: 1,
            opacity: 1,
            ease: 'Power1.easeOut',
          });
          body.removeChild(clone);
        }
      }
    },
  },
});

class Slider {
  constructor(sliderElem) {
    this.slider = sliderElem;
    this.sliderItems = sliderElem.getElementsByClassName('slider-item');
    this.indicators = sliderElem.getElementsByClassName('slide-indicator');
    this.nextBtn = sliderElem.querySelector('.slider-control-next');
    this.prevBtn = sliderElem.querySelector('.slider-control-prev');
    this.currentIndex = 0;
    this.prevItemIndex = this.sliderItems.length - 1;
    this.nextItemIndex = 1;
    this.isSliding = false;
    this.setEventListeners();
    this.indicators[this.currentIndex].classList.add('active');
  }
  setEventListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.prev();
    });
    this.nextBtn.addEventListener('click', () => {
      this.next();
    });
  }

  next() {
    if (this.isSliding) return;
    this.isSliding = true;
    this.sliderItems[this.nextItemIndex].classList.add('next-item');
    setTimeout(() => {
      this.sliderItems[this.currentIndex].classList.add('slide-next');
      this.sliderItems[this.nextItemIndex].classList.add('slide-end');
      this.sliderItems[this.nextItemIndex].classList.add('active');
    }, 20);
    setTimeout(() => {
      this.sliderItems[this.nextItemIndex].classList.remove('next-item', 'slide-end');
      this.sliderItems[this.currentIndex].classList.remove('slide-next', 'active');
      this.isSliding = false;
      this.indicators[this.currentIndex].classList.remove('active');
      this.indicators[this.nextItemIndex].classList.add('active');
      this.setIndices('NEXT');
    }, 400);
  }
  prev() {
    if (this.isSliding) return;
    this.isSliding = true;
    this.sliderItems[this.prevItemIndex].classList.add('prev-item');
    setTimeout(() => {
      this.sliderItems[this.currentIndex].classList.add('slide-prev');
      this.sliderItems[this.prevItemIndex].classList.add('slide-end');
      this.sliderItems[this.prevItemIndex].classList.add('active');
    }, 20);
    setTimeout(() => {
      this.sliderItems[this.prevItemIndex].classList.remove('prev-item', 'slide-end');
      this.sliderItems[this.currentIndex].classList.remove('slide-prev', 'active');
      this.isSliding = false;
      this.indicators[this.currentIndex].classList.remove('active');
      this.indicators[this.prevItemIndex].classList.add('active');
      this.setIndices('PREV');
    }, 400);
  }

  setIndices(direction) {
    let index;
    if (direction === 'NEXT') {
      index =
        this.currentIndex === this.sliderItems.length - 1 ? 0 : this.currentIndex + 1;
    }
    if (direction === 'PREV') {
      index =
        this.currentIndex === 0 ? this.sliderItems.length - 1 : this.currentIndex - 1;
    }
    if (index === 0) {
      this.currentIndex = index;
      this.nextItemIndex = index + 1;
      this.prevItemIndex = this.sliderItems.length - 1;
    } else if (index === this.sliderItems.length - 1) {
      this.currentIndex = this.sliderItems.length - 1;
      this.nextItemIndex = 0;
      this.prevItemIndex = this.currentIndex - 1;
    } else {
      this.currentIndex = index;
      this.nextItemIndex = index + 1;
      this.prevItemIndex = index - 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.tile-container {
  text-align: center;
  user-select: none;
}

.tile {
  width: 200px;
  height: 200px;
  margin: 4px;
  cursor: pointer;
  display: inline-block;
}

.page-container {
  visibility: hidden;
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

.hero-1 {
  background: white;
}

.hero-2 {
  background: white;
}

.hero-3 {
  background: white;
}

.hero-4 {
  background: #dc3c84;
}

.slider {
  height: 400px;
  overflow: hidden;
  position: relative;
}

.slider .slider-item {
  height: 100%;
  width: 100%;
  opacity: 1;
  display: none;
  position: absolute;
  transition: transform 400ms, opacity 0.4s;
}

.slider-item-hide {
  opacity: 0;
}

.slider-image {
  opacity: 1;
  transition: ease 0.2s;
}

.slider-image-hide {
  opacity: 0;
}

.slider .slider-item.active,
.slider .slider-item.prev-item,
.slider .slider-item.next-item {
  display: block;
}

.slider-control-prev,
.slider-control-next {
  position: absolute;
  z-index: 20;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.3;
  transition: opacity 300ms;
}

.slider-control-prev {
  left: 20px;
}

.slider-control-prev:hover {
  opacity: 1;
}

.slider-control-next {
  right: 20px;
}

.slider-control-next:hover {
  opacity: 1;
}

.slider-item.prev-item {
  transform: translateX(-100%);
}

.slider-item.next-item {
  transform: translateX(100%);
}

.slider-item.prev-item,
.slider-item.active.slide-next {
  transform: translateX(-100%);
}

.slider-item.active.slide-prev,
.slider-item.next-item {
  transform: translateX(100%);
}

.slider-item.prev-item.slide-end,
.slider-item.next-item.slide-end {
  transform: translateX(0);
}

.slide-indicators {
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  padding: 0;
  display: flex;
}

.slide-indicator {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.5;
  margin: 0 8px;
}

.slide-indicator.active {
  opacity: 1;
}

.person-1 {
  background: #f4db33;
}

.person-2 {
  background: #972ff8;
}

.person-3 {
  background: #7dd6fe;
}

.person-4 {
  background: #dc3c84;
}
</style>
