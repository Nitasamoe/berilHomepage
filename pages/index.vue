<template>
  <div class="gridPage" :style="gridPageConfig">
    <Header :columnLength="layoutColumns+1" :height="headerHeight"></Header>
    <Hero :columnLength="layoutColumns+1" :height="heroHeight"></Hero>
    <About :columnLength="layoutColumns+1" :height="600"></About>
    


  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';

export default {
  components: {
    Header,
    Hero,
    About
  },
  data() {
    return  {
      'headerHeight' : 80,
      'layoutColumns' : 12,
      'window' : {
        'width': 0,
        'height' :0
      }
    }
  },
  methods: {
    handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight > 500 ? window.innerHeight : 500;
    }
  },
  computed: {
    gridPageConfig(){
      var cssStyle = "";
      cssStyle += "display: grid;"
      cssStyle += "grid-template-columns:" + this.layoutColumns + "1fr;"
      cssStyle += "grid-template-rows:" + this.headerHeight + "px ";
      return cssStyle
    },
    heroHeight(){
      return this.window.height - this.headerHeight;
    }
  },
  created() {
    if(typeof window !== "undefined"){
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
      
  },
  destroyed() {
    if(typeof window !== "undefined"){
      window.removeEventListener('resize', this.handleResize);
    }
  }
}
</script>

<style>
@import '../static/css/normalize.css';

html {
    box-sizing: border-box;
}
/* inherit border-box on all elements in the universe and before and after */
*, 
*:before, 
*:after {
    box-sizing: inherit;
}
html,
body,
body div,
.gridPage,
.gridContent {
    height: 100%;
}

@media only screen and (min-width: 480px)  { 
}


@media only screen and (min-width: 768px) {
}



</style>
