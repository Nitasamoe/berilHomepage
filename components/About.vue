<template>
    <div class="aboutMe pageGrid" :style="aboutMeStyle">
        <div class="titleText">
            <h1>About Me</h1>
        </div>
        <div>
            <div :style="pictureStyle">
                <picture>
                    <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                    <!--<img src="~/static/AboutMe_Picture.png" alt="The Picture of Beril Beden"> -->
                </picture>
            </div>
            
            <div class="cvDownloadBar buttonUi">
                    <button><h4>Download CV</h4></button>
            </div>
            <div class="aboutMeText">
                    <h2> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>              
        </div>
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height'],
    computed: {
        aboutMeStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-end: " + this.columnLength + ";"
            cssStyle += "grid-column-start: 1;"
            cssStyle += "height:" + this.height + "px;"
            cssStyle += "display: grid;";
            cssStyle += "grid-template-rows: 140px repeat(4, 1fr) 80px;";
            return cssStyle;
        },
        pictureStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-start: 1;"
            cssStyle += "grid-column-end: 6;"
            cssStyle += "grid-row-start: 1;"
            cssStyle += "grid-row-end: 7;"
            cssStyle += "overflow: hidden;"
            cssStyle += "background-color: #b7b7b7"
            return cssStyle;
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';

.aboutMe {
    background-color: #f4f4f4;
}

.cvDownloadBar {
    background-color: white;
}

.aboutMe > div:nth-child(2) {
    grid-column: 2/12;
    grid-row: 2/6;
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 1fr);
    grid-template-rows: 0.5fr repeat(5, 1fr) 2fr;
}


.aboutMeText {
    background-color: white;
    grid-column: 6/12;
    grid-row: 2/7;
    display:grid;
    grid-template-columns: 5% 1fr 5%;
    grid-template-rows: 5% 1fr 2fr 5%;
}

.aboutMeText > p {
    grid-column: 2/2;
    grid-row: 3/4;
}

.aboutMeText > h2 {
    grid-column: 2/2;
    grid-row: 2/3;
}

picture img{
    width: 100%;
}

.titleText {
    text-align: center;
    grid-column: 2/12;
    display: flex;
    justify-content: space-around;
    align-items: center;
}


</style>