<template>
    <div class="aboutMe pageGrid" :style="aboutMeStyle">
        <div class="titleText">
            <!--<h1>About Me</h1>-->
        </div>
        <div>
            <div class="pictureStyle">
                <picture>
                    <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                    <!--<img src="~/static/AboutMe_Picture.png" alt="The Picture of Beril Beden"> -->
                </picture>
            </div>
            <div class="aboutMeText">
                    <h4> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="buttonUi">
                    <button><p>Download CV</p></button>
            </div>
            <div class="whiteBack">
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
            cssStyle += "grid-column: 1 /  " + this.columnLength + ";"
            cssStyle += "display: grid;";
            return cssStyle;
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';

/* Styling */
.pictureStyle {
    border: 10px solid #404040;
    background-color: #b7b7b7;
}
.aboutMe {
    background-color: #f4f4f4;
}
.whiteBack {
    background-color: white;
}
/* Layout */ 
.aboutMe {
    grid-template-rows: 140px 1fr;
    height: 800px;
}
/* Title Text */
.titleText {
    text-align: center;
    grid-column: 2/12;
    grid-row: 1/2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

/* div with picture, text and button */
.aboutMe > div:nth-child(2) {
    grid-column: 2/12;
    grid-row: 2/6;
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 1fr);
    grid-template-rows: 4fr 4fr 2fr 2fr;
}
    /* Picture Frame of Portait */
    .pictureStyle {
        grid-column: 3 / 10;
        grid-row: 1 / 3;
        -webkit-transform: translate3d(0, 0, 500px);
        transform: translate3d(0, 0, 500px);
    }
    /* Text Box with 2 Texts*/
    .aboutMeText {
        grid-column: 1/12;
        grid-row: 3/4;
        display: grid;
        grid-template-columns: 5% 1fr 5%;
        grid-template-rows: 5% 1fr 1fr 5%;
        -webkit-transform: translate3d(0, 0, 200px);
        transform: translate3d(0, 0, 200px);
    }
        /* Text Top*/
        .aboutMeText > h4 {
            grid-column: 2/2;
            grid-row: 2/3;
        }
        /* Text Bottom*/
        .aboutMeText > p {
            grid-column: 2/2;
            grid-row: 3/4;
            padding-top: 1%;
        }
    .buttonUi {
        grid-column: 1/12;
        grid-row: 4/5;
        -webkit-transform: translate3d(0, 0, 500px);
        transform: translate3d(0, 0, 500px);
    }
    .whiteBack {
        grid-column: 1/13;
        grid-row: 2/5;
        -webkit-transform: translate3d(0, 0, 500px);
        transform: translate3d(0, 0, 100px);
    }

picture img{
    width: 100%;
}

@media only screen and (min-width: 600px)  { 
    /* Styling */
    .pictureStyle {
        border: 12px solid #404040;
    }
    .aboutMe {
        height: 1000px;
    }
    /* Layout */ 
    .aboutMe > div:nth-child(2) {
        grid-template-columns: 0.5fr repeat(10, 1fr);
        grid-template-rows: 2fr 2fr 2fr 1fr;
    }
}

@media only screen and (min-width: 1200px)  { 
    /* Styling */
    .pictureStyle {
        border: 15px solid #404040;
    }
    .aboutMe {
        height: 800px;
    }
    /* div with picture, text and button */
    .aboutMe > div:nth-child(2) {
        grid-template-rows: 1fr 4fr 2fr;
    }
        /* Picture Frame of Portait */
        .pictureStyle {
            grid-column: 1 / 6;
            grid-row: 1 / 3;
        }
        /* Text Box with 2 Texts*/
        .aboutMeText {
            grid-column: 6/12;
            grid-row: 2/3;
        }
    .buttonUi {
        grid-column: 2/12;
        grid-row: 3/4;
    }
    .whiteBack {
        grid-column: 2 / 12;
        grid-row: 2 / 4;
    }
}
</style>