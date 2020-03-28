<template>
    <header class="navBar">
        <BerilBeden class="logo" />
        <nav id="main-menu" class="main-menu" aria-label="main menu">
            <ul>
                <li><a :href="baseUrl+'#'">Menu</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#about'">About</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#work'">Work</a></li>
                <li class="hrLi"><hr></li>
                <li><a :href="baseUrl+'#contact'">Contact</a></li>
            </ul>
        </nav>
        <a :href="baseUrl+'#main-menu-toggle'" class="menu-close"  aria-label="close main menu">
        </a>
        <a :href="baseUrl+'#main-menu'" class="menu-toggle" id="main-menu-toggle" aria-label="open main menu">
            <div class="burger">
                <hr>
                <hr>
                <hr>
            </div>  
            <!--<font-awesome-icon aria-hidden="true" :icon="['fas', 'bars']"/>-->
        </a>
        <a :href="baseUrl+'#main-menu-toggle'" class="backdrop" hidden tabindex="-1"></a>

    </header>    
</template>

<script>
import BerilBeden from '~/components/BerilBeden.vue';

export default {
    props: ['columnLength', 'height'],
    components: {
        BerilBeden
    },
    data() {
        return {
            baseUrl: process.env.DEPLOY_ENV === "GH_PAGES" ? "/berilHomepage/" : "/"
        }
    }
}
</script>

<style scoped>
/* Properties */
.navBar {
    --navBarHeigth: 90px;
}

/* Styles */
* {
    text-decoration: none;
    list-style: none;
    line-height: 0px;
}
hr {
    border: 0.5px solid;
}
a {
    font-family: var(--mainFont);
    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;
    color: #c2c2c2;
}
:focus {
    outline: 0;
}
ul hr {
    color: #4f4f4f;
}
/* ==============Logo=================== */
#main-menu > ul > li:nth-child(1) a{
    color: #707070;
    font-family: var(--mainFont);
    font-weight: 800;
    text-transform: none;
}
.logo {
    display: none;
}
/* ==============Burger=================== */
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
    color: #909090;
}
#main-menu:target ~ .menu-toggle .burger > hr:nth-child(1) {
    transform: rotate(45deg) translateX(0px);
}
#main-menu:target ~ .menu-toggle .burger > hr:nth-child(2) {
    display: none;
}
#main-menu:target ~ .menu-toggle .burger > hr:nth-child(3) {
    transform: rotate(-45deg) translateX(0px);
}
.hrLi {

}
/* =========================================== */
/* ==================Layout=================== */
/* =========================================== */
.navBar {
    display: grid;
    grid-template-columns: 15% 1fr 1fr 15%;
    grid-template-rows: var(--navBarHeigth);
}
/* Burger Menu */
.menu-toggle {
    grid-column: 4/5;
    display: flex;
    align-items: center;
    justify-content: center;
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
.main-menu ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
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
    /* hide first element on big screen cause logo will appear */
    #main-menu > ul > li:nth-child(1) {
        display: none;
    }

    .navBar {
        grid-template-columns: 2% 1.5fr 300px 2%;
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
    a {
        color: #707070;
    }
   .menu-close {
       display: none;
    }
    .menu-toggle {
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

}

@media only screen and (min-width: 1000px) {
    .navBar {
        grid-template-columns: 2% 1fr 400px 2%;
    }
}

</style>