<template>
  <a id="back"><v-icon>mdi-arrow-up-thick</v-icon></a>
</template>
<script>
export default {
  data() {
    return {
      //
    };
  },

  methods: {
    backToTop() {
      const btn = document.querySelector('#back');
      const html = document.querySelector('html');
      const body = document.body;
      const scrollPos = window.scrollY;
      if (scrollPos > 300) {
        btn.classList.add('btn-show');
      } else {
        btn.classList.remove('btn-show');
      }

      btn.addEventListener('click', function (e) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    },
  },

  mounted() {
    //
    window.addEventListener('scroll', this.backToTop);
  },
};
</script>
<style lang="scss" scoped>
#back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  position: fixed;
  bottom: 40px;
  right: 35px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#back.btn-show {
  opacity: 1;
  visibility: visible;
}

#back:hover {
  cursor: pointer;
  background-color: #d1dffd;
  color: white;
}
</style>
