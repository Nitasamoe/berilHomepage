<template>
    <div class="aboutMe pageGrid">
        <div class="titleText">
            <!--<h1>About Me</h1>-->
        </div>
        <div class="aboutComponent">
            <div class="pictureStyle">
                <picture>
                    <!-- <source srcset="~/static/AboutMe_Picture.png" media="(win-width: 100px)"> -->
                    <!--<img src="~/static/AboutMe_Picture.png" alt="The Picture of Beril Beden"> -->
                </picture>
            </div>
            <div class="aboutMeText">
                    <h3> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ut labore et dolore magna aliquyam erat, sed diam voluptua.</h3>
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
    props: ['columnLength', 'height']
}
</script>

<style scoped>
@import '~/static/css/baseUi.css';
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';

/* Styling */
.pictureStyle {
    background-color: #b7b7b7;
}
.aboutMe {
    background-color: #f4f4f4;
}
.whiteBack {
    background-color: white;
}
/* Layout */ 
.pageGrid {
    display: grid;
}
.aboutMe {
    grid-template-rows: 140px 750px 50px;
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
.aboutComponent {
    grid-column: 2/12;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 15px repeat(8, 1fr) 15px;
    grid-template-rows: 130px 120px 3fr 1fr;
}
    /* Picture Frame of Portait */
    .pictureStyle {
        grid-column: 2 / 10;
        grid-row: 1 / 3;
        -webkit-transform: translate3d(0, 0, 500px);
        transform: translate3d(0, 0, 500px);
        z-index: 500;
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
        z-index: 200;
        overflow: auto;
    }
        /* Text Top*/
        .aboutMeText > h3 {
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
        z-index: 500;
    }
    .whiteBack {
        grid-column: 1/13;
        grid-row: 2/5;
        -webkit-transform: translate3d(0, 0, 100px);
        transform: translate3d(0, 0, 100px);
        z-index: 100;
    }

picture img{
    width: 100%;
}
@media only screen and (min-width: 375px)  { 
    .aboutComponent {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 130px 150px 3fr 1fr;
    }
}
@media only screen and (min-width: 450px)  { 
    .aboutComponent {
        grid-column: 2/12;
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 130px 170px 3fr 1fr;
    }
}
@media only screen and (min-width: 600px)  { 
    /* Layout */ 
    .aboutComponent {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 200px 200px 3fr 1fr;
    }
}

@media only screen and (min-width: 1200px)  { 
    /* Styling */
    .pictureStyle {
        border: 0px solid #404040;
    }
    /* div with picture, text and button */
    .aboutMe > div:nth-child(2) {
        grid-template-rows: 1fr 4fr 120px;
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