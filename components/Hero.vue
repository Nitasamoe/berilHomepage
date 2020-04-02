<template>
    <div class="hero" :style="styleObject">
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
    },
    data(){
        return {
            windowWidth: 0,
            styleObject: {
                height: ""
            }
        }
    },
    methods: {
        handleScroll() {
            this.styleObject.height = this.excludeTooSmallNumbers(window.innerHeight) + "px";
            this.windowWidth = window.innerWidth;
            console.log(this.styleObject.height);
        },
        excludeTooSmallNumbers(val) {
            console.log(this.windowWidth);
            return (val < 500 ? 500 : val) - (this.windowWidth > 600 ? 80 : 50); // subtract height of nav bar
        }
    },
    beforeMount() {
        console.log("Before mount");
        var self = this;
        this.windowWidth = window.innerWidth;
        this.styleObject.height = this.excludeTooSmallNumbers(window.innerHeight) + "px";
        window.addEventListener('resize', self.handleScroll);
        console.log("asdadad");
    },
    beforeDestroy() {
        console.log("Before destroy");
        var self = this
        window.addEventListener('resize', self.handleScroll);
    }
}
</script>


<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
/* CCS for all Sizes and Mobile */ 

.hero {
    /* height: 550px; */
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
        /* height: 800px; */
        grid-template-columns: repeat(11, 1fr) 0.2fr;
    }
    .heroText {
        grid-column: 2/6;
        grid-row: 2/4;
        display: flex;
        justify-content: center;
        text-align: left;
    }
    .sittingGirl {
        grid-column: 3/12;
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