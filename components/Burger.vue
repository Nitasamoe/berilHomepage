<template>
    <a v-on:click="setBurgerToFalse" :href="baseUrl+'#main-menu'" class="menu-toggle" ref="menuToggle" id="main-menu-toggle" aria-label="open main menu">
            <div class="burger">
                <hr>
                <hr>
                <hr>
            </div>
        </a>
</template>
<script>
export default {
    props: ['baseUrl', 'burgerActive'],
    data(){
        return {
            burgerState: false
        }
    },
    watch: {
        burgerActive(newValue, oldValue){
            this.burgerState = true;
        },
        burgerState(newValue, oldValue){
            console.log("burgerState");
            console.log(this.burgerState);
            if(this.burgerState === true) {
                let el = document.getElementsByClassName("menu-toggle")[0];
                el.classList.add("burgerActive");
            } else {
                let el = document.getElementsByClassName("menu-toggle")[0];
                el.classList.remove("burgerActive");
            }
        }
    },
    methods: {
        setBurgerToFalse(){
            this.burgerState = false;
        }
    }
}
</script>

<style>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';

.menu-toggle {
  animation: 1s appear;
}
.burger > hr:nth-child(1) {
    transform: rotate(90deg) translateX(10px);
}
.burger > hr:nth-child(2) {
    transform: rotate(90deg);
}
.burger > hr:nth-child(3) {
    transform: rotate(90deg) translateX(-10px);
}
.burger > hr {
    height: 30px;
    position: absolute;
    border: solid 1px #909090;
    /* color: #909090; */
}
.burgerActive .burger > hr:nth-child(1){
    animation: 0.2s ease-in-out transitionToXTopBarReverse;
}
.burgerActive .burger > hr:nth-child(2){
    animation: 0.2s ease-in-out transitionToXMidBarReverse;
}
.burgerActive .burger > hr:nth-child(3){
    animation: 0.2s ease-in-out transitionToXBotBarReverse;
}


#main-menu:target ~ .menu-toggle .burger > hr:nth-child(1) {
    transform: rotate(45deg) translateX(0px);
    animation: 0.2s ease-in-out transitionToXTopBar; 
}
#main-menu:target ~ .menu-toggle .burger > hr:nth-child(2) {
    transform: rotate(-45deg) translateX(0px);
    animation: 0.2s ease-in-out transitionToXMidBar; 
}
#main-menu:target ~ .menu-toggle .burger > hr:nth-child(3) {
    transform: rotate(-45deg) translateX(0px);
    animation: 0.2s ease-in-out transitionToXBotBar; 
}

/* Burger Menu */
.menu-toggle {
    grid-column: 4/5;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes transitionToXTopBar {
  from {
    transform: rotate(90deg) translateX(10px);
  }
  to {
    transform: rotate(45deg) translateX(0px);
  }
}
@keyframes transitionToXTopBarReverse {
  from {
    transform: rotate(45deg) translateX(0px);
  }
  to {
    transform: rotate(90deg) translateX(10px);
  }
}

@keyframes transitionToXBotBar {
  from {
    transform: rotate(90deg) translateX(-10px);
  }
  to {
    transform: rotate(-45deg) translateX(0px);
  }
}
@keyframes transitionToXBotBarReverse {
  from {
    transform: rotate(-45deg) translateX(0px);
  }
  to {
    transform: rotate(90deg) translateX(-10px);
  }
}


@keyframes transitionToXMidBar {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(-45deg) translateX(0px);
  }
}
@keyframes transitionToXMidBarReverse {
  from {
    transform: rotate(-45deg) translateX(0px);
  }
  to {
    transform: rotate(90deg);
  }
}
</style>
