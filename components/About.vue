<template>
    <div class="aboutMe" :style="aboutMeStyle">
        <h1>Title</h1>
        <div>
            <picture :style="pictureStyle">
                <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                <img src="~/static/AboutMe_Picture.png" alt="The Picture of Beril Beden">
            </picture>
            <div class="cvDownloadBar">
                    <button>Press me</button>
            </div>
            <div class="aboutMeText">
                    <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h3>
                    <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
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
            cssStyle += "grid-template-columns: 2fr repeat(10, 1fr) 2fr;";
            cssStyle += "grid-template-rows: repeat(6, 1fr);";
            return cssStyle;
        },
        pictureStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-start: 1;"
            cssStyle += "grid-column-end: 5;"
            cssStyle += "grid-row-start: 1;"
            cssStyle += "grid-row-end: 7;"
            cssStyle += "overflow: hidden;"
            return cssStyle;
        }
    }
}
</script>

<style scoped>
.aboutMe {
    background-color: #ddd;
    padding-top: 30px;
}
.aboutMe > div {
    grid-column: 2/12;
    grid-row: 2/6;
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 1fr);
    grid-template-rows: 0.5fr repeat(6, 1fr);
}

.cvDownloadBar {
        background-color: white;
        grid-column: 2/12;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
}

.cvDownloadBar > button {
}

.aboutMeText {
        background-color: white;
        grid-column: 5/12;
        grid-row: 2/7;
        display:grid;
        grid-template-columns: 5% 1fr 5%;
        grid-template-rows: 5% 1fr 2fr 5%;
}

.aboutMeText > div {
        grid-column: 2/2;
        grid-row: 3/4;
}

.aboutMeText > h3 {
        grid-column: 2/2;
        grid-row: 2/3;
}

picture img{
    width: 100%;
}

h1 {
    text-align: center;
    grid-column: 2/12;
}
</style>