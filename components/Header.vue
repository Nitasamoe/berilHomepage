<template>
    <header class="navBar">
        <div  class="logo" :style="{backgroundImage: 'url(./picture/berilLogo.svg)'}" />
        <nav id="main-menu" class="main-menu" aria-label="main menu">
            <ul>
                <li><a >Menu</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#about'">About</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#work'">Work</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#contact'">Contact</a></li>
            </ul>
        </nav>
        <a  v-on:click="burgerActive = !burgerActive;" :href="baseUrl+'#main-menu-toggle'" class="menu-close"  aria-label="close main menu">
        </a>
        <Burger v-on:click="burgerActive = !burgerActive" :burgerActive="burgerActive" id="burger" :baseUrl="baseUrl" />
        <a :href="baseUrl+'#main-menu-toggle'" class="backdrop" hidden tabindex="-1"></a>
    </header>    
</template>

<script>
import BerilBeden from '~/components/BerilBeden.vue';
import Burger from '~/components/Burger.vue';

export default {
    components: {
        BerilBeden,
        Burger
    },
    data() {
        return {
            baseUrl: false ? "/berilHomepage/" : "/",
            burgerActive : false
        }
    }
}
</script>

<style scoped>
/* ############ PROPERTIES ############# */
.navBar {
    --navBarHeigth: 50px;
}
/* ############ Flex/Grid ############# */
@media only screen and (min-width: 0px) {
    .navBar { /* Whole Component */
        display: grid;
        grid-template-columns: 15% 1fr 1fr 100px;
        grid-template-rows: var(--navBarHeigth);
    }
    .main-menu ul { /* List Element with Links */
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
}
@media only screen and (min-width: 600px) {
    .navBar { /* Whole Component */
        grid-template-columns: 2% 1.5fr 300px 2%;
    }
}
@media only screen and (min-width: 1000px) {
    .navBar {
        grid-template-columns: 2% 1fr 400px 2%;
    }
}
/* ############## STYLES ############## */ 
li:hover a {
  color:#C4D9D4;
  font-weight: 400;
}
li {
  text-align: center;
}

* {
    text-decoration: none;
    list-style: none;
    line-height: 0px;
}
hr {
    border: 0.5px solid;
}
a {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
    /* text-transform: uppercase; */
    color: #1F2B3F;
}
:focus {
    outline: 0;
}
ul hr {
    color: #4f4f4f;
}

#main-menu > ul > li:nth-child(1) a{
    color: #707070;
    font-family: var(--mainFont);
    font-weight: 800;
    text-transform: none;
}
.logo {
    display: none;
    width: 200px;
    animation: 5s appear;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    height: 70px;
}
/* The Menu List */
.main-menu {
    position: absolute;
    background-color: #3E3E3E;
    width: 75%;
    height: 2500px;
    left: -75%;
    -webkit-transform: translate3d(0, 0, 1002px);
    transform: translate3d(0, 0, 1002px);
    z-index: 1002;
}
li {
    flex-basis: 75%;
    padding-top: 35px;
}
.main-menu:target{
    left: 0;
    position: fixed;
}

/* Backdrop to unclick menu */
.menu-close {
    display: none;
    position: absolute;
}
#main-menu:target + .menu-close {
    display: block;
    position: fixed;
    height: 2000px;
    width: 100%;
    left: 0;
    -webkit-transform: translate3d(0, 0, 1001px);
    transform: translate3d(0, 0, 1001px);
    z-index: 1001;
}


@media only screen and (min-width: 600px) {
    .navBar {
        --navBarHeigth: 80px;
    }
    /* hide first element on big screen cause logo will appear */
    #main-menu > ul > li:nth-child(1) {
        display: none;
    }
    .main-menu:target{
        position: static;
    }
    .main-menu {
            grid-column: 3 / 4;
            position: static;
            display: block;
            background-color: transparent;
            height: var(--navBarHeigth);
            width: 100%;
    }
    li {
        padding-top: 0px;
    }
    /* Backdrop to unclick menu is alwas hidden when there is no burger */
   .menu-close {
       display: none;
    }
    .main-menu ul{
        height: 100%;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }
    .hrLi {
        display: none;
    }
    .logo {
        grid-column: 2 / 3;
        display: flex;
    }
    /* Backdrop to unclick menu is alwas hidden when there is no burger */
    #burger {
        display: none;
    }
}

</style>