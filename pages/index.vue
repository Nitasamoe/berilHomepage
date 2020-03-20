<template>
  <div class="gridPage" :style="gridPageConfig">
    <Header :columnLength="layoutColumns+1" :height="headerHeight"></Header>
    <Hero :columnLength="layoutColumns+1" :height="800"></Hero>
    <About :columnLength="layoutColumns+1" :height="800"></About>
    <Works :columnLength="layoutColumns+1" :height="1800"></Works>
    <Footer :columnLength="layoutColumns+1" :height="300"></Footer>

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
      'headerHeight' : 50,
      'layoutColumns' : 12
    }
  },
  methods: {
  },
  computed: {
    gridPageConfig(){
      var cssStyle = "";
      cssStyle += "display: grid;"
      cssStyle += "grid-template-columns:" + this.layoutColumns + "1fr;"
      cssStyle += "grid-template-rows:" + this.headerHeight + "px ";
      return cssStyle
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

   

@media only screen and (min-width: 480px)  { 
}


@media only screen and (min-width: 768px) {
}



</style>
