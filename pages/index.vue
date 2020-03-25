<template>
  <div class="pageGrid">
    <Header />
    <Hero :columnLength="layoutColumns+1" :height="800"></Hero>
    <About id="about"></About>
    <Works id="work" :columnLength="layoutColumns+1" :categories="categories" :height="1800"></Works>
    <Footer id="contact" :columnLength="layoutColumns+1" :height="300"></Footer>

  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';
import Works from '~/components/Works.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Hero,
    About,
    Works,
    Footer
  },
  data() {
    return  {
      'headerHeight' : 60,
      'layoutColumns' : 12
    }
  },
  async asyncData({$axios}) {
      try {
          let response = await $axios.$get('/api/category');
          console.log(response.category);
          return {
              categories: response.category
          }
          } catch (err) {
          console.log("#####################");
          console.log("Error while retrieving Data from API");
          return {
              categories: [{"title":"interior"}, {"title":"Design Research"}, {"title":"Fun"}]  
          }
      }
  }
}
</script>

<style>
@import '../static/css/normalize.css';
@import '~/static/css/globalVariables.css';

html {
    box-sizing: border-box;
}
/* inherit border-box on all elements in the universe and before and after */
*, 
*:before, 
*:after {
    box-sizing: inherit;
}

</style>
