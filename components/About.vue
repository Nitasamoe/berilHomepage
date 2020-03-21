<template>
    <div class="aboutMe pageGrid" :style="aboutMeStyle">
        <div class="titleText">
            <h1>About Me</h1>
        </div>
        <div>
            <div class="pictureStyle">
                <picture>
                    <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                    <!--<img src="~/static/AboutMe_Picture.png" alt="The Picture of Beril Beden"> -->
                </picture>
            </div>
            
            <div class="buttonUi">
                    <button><h4>Download CV</h4></button>
            </div>
            <div class="aboutMeText">
                    <h4> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</h4>
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
    border: 15px solid #404040;
    background-color: #b7b7b7;
}
.aboutMe {
    background-color: #f4f4f4;
}
.buttonUi {
    background-color: white;
}

.aboutMeText {
    background-color: white;
}
/* Layout */ 
.aboutMe {
    grid-template-rows: 140px 1fr;
    height: 1200px;
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
    grid-template-rows: repeat(7, 1fr);
}
    /* Picture Frame of Portait */
    .pictureStyle {
        grid-column: 3 / 10;
        grid-row: 1 / 5;
        overflow: hidden;
        z-index: 10;
    }
    /* Text Box with 2 Texts*/
    .aboutMeText {
        grid-column: 1/12;
        grid-row: 2/7;
        display: grid;
        grid-template-columns: 5% 1fr 5%;
        grid-template-rows: 60% 1fr 2fr 1%;
    }
        /* Text Top*/
        .aboutMeText > p {
            grid-column: 2/2;
            grid-row: 3/4;
            padding-top: 1%;
        }
        /* Text Bottom*/
        .aboutMeText > h4 {
            grid-column: 2/2;
            grid-row: 2/3;
        }
    .buttonUi {
        grid-row: 7/8;
    }





picture img{
    width: 100%;
}


.buttonUi {
       grid-column: 1/12;
}

@media only screen and (min-width: 1200px)  { 
    .aboutMe {
        grid-template-rows: 140px 1fr;
        height: 1000px;
    }
    .buttonUi {
       grid-column: 2/12;
    }
    .aboutMeText {
        grid-column: 6/12;
        grid-row: 2/7;
        display:grid;
        grid-template-rows: 5% 1fr 2fr 5%;
    }
    .pictureStyle {
        grid-column: 1 / 6;
        grid-row: 1 / 7;
    }
    .aboutMeText > p {
        grid-column: 2/2;
        grid-row: 3/4;
        padding-top: 1%;
    }
    .aboutMeText > h4 {
        grid-column: 2/2;
        grid-row: 2/3;
    }
}

</style>