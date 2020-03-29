<template>
    <a href="#">
        <svg :style="arrowStyle" class="section" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enable-background="new 0 0 53 20" xml:space="preserve">
            <g>
                <polygon points="43.886,16.221 42.697,17.687 26.5,4.731 10.303,17.688 9.114,16.221 26.5,2.312 	"></polygon>
            </g>
        </svg>
    </a>
</template>

<script>
export default {
    data(){
        return {
            arrowStyle: {opacity: 0}
        }
    },
    methods: {
        handleScroll(){
            let scrollX = window.scrollY;
            let makeArrowVisibleOnPx= 600;
            let startTransitionAfterPx = 300;
            let opacity = (scrollX > startTransitionAfterPx) ? (scrollX-startTransitionAfterPx)/(makeArrowVisibleOnPx-startTransitionAfterPx) : 0;
            this.arrowStyle.opacity = opacity;
        },
        scrollToTop(){
            console.log("scroll up");
            window.scroll(0,0);
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.addEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
svg {
    position: fixed;
    right: 30px;
    bottom: 30px;
    -webkit-transform: translate3d(0, 0, 2500px);
    transform: translate3d(0, 0, 2500px);
    z-index: 2500;
    width: 100px;
}
.section:hover {
  transform: scale(1.1);
}
.section {
  transition: all 0.5s;
  transform-origin: 50% 50%;
}
.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
