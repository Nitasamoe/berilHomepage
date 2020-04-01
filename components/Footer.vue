<template>
    <div class="footer pageGrid">
        <div class="contactData">
            <hr>
            <h3>Contact Me</h3>
            <p>fasfasf asfd asdfasdf a asdfasf</p>
            <p>fas a afasf asda</p>
        </div>
        
                
    </div>    
</template>

<script>
export default {
    data(){
        return {
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
        console.log("Before mount");
        document.addEventListener('scroll', this.handleScroll);
        document.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        console.log("Before destroy");
        document.addEventListener('scroll', this.handleScroll);
        document.addEventListener('resize', this.handleResize);
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
                let aboutScroll = 2330;
                if( 600 < windowWidth && windowWidth < 1200 ) {aboutScroll = 1400;}
                if( 1200 < windowWidth && windowWidth < 10000 ) {aboutScroll = 2000;}
                // console.log("-------------------");
                // console.log("windowWidth "+ windowWidth);
                // console.log("scrollY "+ scrollY);
                // console.log("aboutScroll " + aboutScroll);
                if(scrollY < aboutScroll) {
                    document.getElementsByClassName("contactData")[0].style.transform = `translate3d(0px, 0px, 0)`;
                    document.getElementsByClassName("contactData")[0].style.opacity = "0";
                } else {
                    document.getElementsByClassName("contactData")[0].style.transform = `translate3d(0px, -${translation}px, 0)`;
                    document.getElementsByClassName("contactData")[0].style.opacity = "1";
                }
            }
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';
.contactData {
    transition: all 1.4s ease-in-out 0s;
}

hr {
    width: 100%;
}

.footer {
    display: grid;
    height: 200px;
    background-color: #f4f4f4;
}
.footer > div {
    grid-column: 2 / 12;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 600px)  { 
    hr {
        display: none;
    }
    .footer > div {
        align-items: flex-end;
    }
}
</style>