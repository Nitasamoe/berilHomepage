<template>
    <div class="hero">
    <!--<div v-bind:style="{ backgroundImage: 'url(' + require('~/assets/heroBack.png') + ')'}">-->
        <div class="heroText">
            <h1>Service Designer</h1>
            <h2>I'm Beril Beden, a designer driving business solutions through user needs</h2>
        </div>
        <div>
            <picture>
                <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                <!--<img src="~/assets/heroBackW.png" alt="The Picture of Beril Beden">-->
            </picture>
        </div>
    </div>    
</template>

<script>
export default {
}
</script>


<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
/* CCS for all Sizes and Mobile */ 

img {
    width: 100%;
}
.hero {
    height: 550px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(12, 1fr);
}

.heroText {
    grid-column: 1/13;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: column wrap;
    text-align: center;
    color: black;
}

.hero > div:nth-child(2) {
    grid-column: 1/13;
    grid-row: 3/6;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.hero > div:nth-child(2) > picture {
    display: flex;
    justify-content: center;
    align-content: center;
}

@media only screen and (min-width: 600px) {

    .heroText {
        grid-column: 3/11;
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
    .hero > div:nth-child(2) {
        grid-column: 4/13;
        grid-row: 1/6;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero > div:nth-child(2) > picture {
        justify-content: flex-end;
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