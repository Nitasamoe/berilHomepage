<template>
    <div class="aboutMe pageGrid">
        <div class="titleText">
            <span class="sectionTitle">About Me</span>
        </div>
        <div class="aboutComponent">
            <div class="pictureStyle"
                :style="{backgroundImage: 'url(./picture/pictureSix.jpg)'}"
            >
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
                    <button class="hoverToBlack"><p>Download CV</p></button>
            </div>
            <div class="whiteBack">
            </div>              
        </div>
    </div>    
</template>

<script>

export default {
    props: ['columnLength', 'height'],
    data(){
        return {
            // scrollX: 0,
            // windowWidth: 0,
            scrollComponents: {
                scrollY: 0,
                windowWidth: 0
            }
        }
    },
    methods: {
        handleScroll(){
            this.scrollComponents.scrollY = window.scrollY;
            this.scrollComponents.windowWidth = window.innerWidth;
        },
        handleResize(){
            this.windowWidth = window.innerWidth;
        }
    },
    beforeMount() {
        console.log("Before Mount");
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        console.log("Before destroy");
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },
    computed: {
    },
    watch: {
        scrollComponents: {
            deep: true,
            handler(val) {
                let scrollY = val.scrollY;
                let windowWidth = val.windowWidth;
                let translation = 30;
                let aboutScroll = 400;
                if( 600 < windowWidth && windowWidth < 1200 ) {aboutScroll = 580;}
                if( 1200 < windowWidth && windowWidth < 10000 ) {aboutScroll = 440;}
                // console.log("-------------------");
                // console.log("windowWidth "+ windowWidth);
                // console.log("scrollY "+ scrollY);
                // console.log("aboutScroll " + aboutScroll);
                if(scrollY < aboutScroll) {
                    document.getElementsByClassName("aboutComponent")[0].style.transform = `translate3d(0px, 0px, 0)`;
                    document.getElementsByClassName("aboutMeText")[0].style.transform = `translate3d(0px, 0px, 0)`;
                    document.getElementsByClassName("pictureStyle")[0].style.transform = `translate3d(0px, 0px, 0)`;
                    document.getElementsByClassName("aboutMeText")[0].style.opacity = "0";
                } else {
                    document.getElementsByClassName("aboutComponent")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("pictureStyle")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("aboutMeText")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("buttonUi")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("whiteBack")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("aboutMeText")[0].style.opacity = "1";
                }
            }
        }
    }
}
</script>

<style scoped>
@import '~/static/css/baseUi.css';
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
.aboutComponent {
    transition: all 2s ease-in-out 0s;
}
.pictureStyle {
    transition: all 1.4s ease-in-out 0s;
}
.aboutMeText {
    transition: all 1.6s ease-in-out 0s;
}
.buttonUi, .whiteBack {
    transition: all 1.9s ease-in-out 0s;
}
.slideUp {
    transform: translate3d(0, +200px, 0);
}

/* Styling */
.pictureStyle {
    background-color: #b7b7b7;
    background-size: cover;
    background-position: bottom;
    box-shadow: 3px 3px 4px #ddd;
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
    grid-template-rows: 240px 750px 50px;
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
.sectionTitle {
    transform: translateY(10px);
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
    .titleText {
        grid-column: 1 / 12;
        grid-row: 1 / 2;
    }
    /* div with picture, text and button */
    .aboutMe > div:nth-child(2) {
        grid-template-rows: 0.5fr 4fr 120px;
    }
        /* Picture Frame of Portait */
        .pictureStyle {
            grid-column: 1 / 6;
            grid-row: 2 / 3;
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
        grid-row: 1 / 4;
    }
    .sectionTitle {
        transform: translateY(-20px);
    }
}
</style>