<template>
  <div class="container">
    <div class="cards card-1">
      <div class="cards__inner"></div>
      <div class="card-info">
        <p>test</p>
      </div>
    </div>
    <div class="cards card-2">
      <div class="cards__inner"></div>
      <div class="card-info">
        <p>test</p>
      </div>
    </div>
    <div class="cards card-3">
      <div class="cards__inner"></div>
      <div class="card-info">
        <p>test</p>
      </div>
    </div>
    <div class="cards card-4">
      <div class="cards__inner"></div>
      <div class="card-info">
        <p>test</p>
      </div>
    </div>

    <div class="cards card-5">
      <div class="cards__inner"></div>
      <div class="card-info">
        <p>test</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },

  methods: {
    setClasses() {
      const cards = document.querySelectorAll('.cards');
      const classes = ['left2', 'left', 'active', 'right2', 'right'];
      cards.forEach((card, index) => card.classList.add(classes[index]));
    },

    changePosition(e) {
      const clickedCard = e.currentTarget;
      const activeCard = document.querySelector('.cards.active');
      if (clickedCard.classList.contains('active')) return;
      const classesFrom = e.currentTarget.className;
      const classesTo = activeCard.className;
      clickedCard.className = classesTo;
      activeCard.className = classesFrom;
    },
  },

  mounted() {
    const cards = document.querySelectorAll('.cards');
    cards.forEach((item) => {
      item.addEventListener('click', this.changePosition);
    });
    this.setClasses();
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  position: relative;
}

.cards {
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(black, 0.2);
  position: absolute;
  width: 33.33%;
  transition: all 400ms ease;
  background-size: cover;
  background-position: center;

  &:hover:not(.active) {
    &.left {
      z-index: 4;
      transform: translateX(-50%) rotate(-10deg) scale(0.9);
    }

    &.right {
      z-index: 4;
      transform: translateX(50%) rotate(10deg) scale(0.9);
    }
    &.left2 {
      z-index: 3;
      transform: translateX(-100%) rotate(-10deg) scale(0.9);
    }

    &.right2 {
      z-index: 3;
      transform: translateX(100%) rotate(10deg) scale(0.9);
    }
  }

  &.left {
    z-index: 4;
    transform: translateX(-50%) scale(0.9);
  }

  &.right {
    z-index: 4;
    transform: translateX(50%) scale(0.9);
  }
  &.left2 {
    z-index: 3;
    transform: translateX(-100%) scale(0.8);
  }

  &.right2 {
    z-index: 3;
    transform: translateX(100%) scale(0.8);
  }

  &.active {
    z-index: 5;
    position: relative;
  }

  &__inner {
    position: relative;
    padding-bottom: calc(675 / 425) * 100%;
  }
}

.card-1 {
  background-image: url('https://i.ibb.co/30kV8nx/person0.png');
  background-color: #fff;
}
.card-2 {
  background-image: url('https://i.ibb.co/30kV8nx/person0.png');
  background-color: #fff;
}
.card-3 {
  background-image: url('https://i.ibb.co/30kV8nx/person0.png');
  background-color: #fff;
}
.card-4 {
  background-image: url('https://i.ibb.co/30kV8nx/person0.png');
  background-color: #fff;
}
.card-5 {
  background-image: url('https://i.ibb.co/30kV8nx/person0.png');
  background-color: #fff;
}

.card-info {
  height: 2.5rem;
  background-color: #fff;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  text-align: left;
  padding: 0.5em;
}
</style>
