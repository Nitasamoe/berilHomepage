<template>
  <div class="gridPage">
    <Header :columnLength=13 :height=50></Header>
    <div class="gridContent">
        <div></div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
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

.gridPage {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

@media only screen and (min-width: 480px)  { 
}


@media only screen and (min-width: 768px) {
}



</style>
