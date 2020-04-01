<template>
    <div class="hero">
    <!--<div v-bind:style="{ backgroundImage: 'url(' + require('~/assets/heroBack.png') + ')'}">-->
        <div class="heroText">
            <h1>Service Designer</h1>
            <h2>I'm Beril Beden, a designer lorum ipsum banana</h2>
        </div>
        <div  class="sittingGirl" :style="{backgroundImage: 'url(./picture/sittingGirl.svg)'}">
           
        </div>
    </div>    
</template>

<script>
import SittingGirl from '~/components/SittingGirl.vue';

export default {
    components: {
        SittingGirl
    }
}
</script>


<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
/* CCS for all Sizes and Mobile */ 

.hero {
    height: 550px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(12, 1fr);
}

.heroText {
    grid-column: 3/11;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    text-align: center;
    color: black;
}

.sittingGirl {
    grid-column: 5/13;
    grid-row: 3/6;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: bottom;
}

@media only screen and (min-width: 600px) {

    .heroText {
        grid-column: 3/11;
    }
    .sittingGirl {
        background-position: bottom;
    }
}

@media only screen and (min-width: 1200px) {
    .hero {
        height: 800px;
    }
    .heroText {
        grid-column: 2/6;
        grid-row: 2/4;
        display: flex;
        justify-content: center;
        text-align: left;
    }
    .sittingGirl {
        grid-column: 5/13;
        grid-row: 2/6;
        display: flex;
        justify-content: center;
        align-items: center;
        background-position: right;
    }

   img {
       width: 90%;
   }

}

@media only screen and (min-width: 1400px) {
   img {
       width: 70%;
   }
}



</style>