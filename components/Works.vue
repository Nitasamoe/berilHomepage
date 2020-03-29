<template>
    <div class="works pageGrid">
        <div class="titleText">
            <h1>Works</h1>
        </div>
        <div class="categories">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <div class="buttonUi">
                        <button><p>{{category.title}}</p></button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="projectPortfolio">
            <div class="projectPreview" v-for="project in projects" :key="project.id">
                <div></div>
                <div>
                    <div class="textHolder">
                        <span class="headline">{{ project.name }}</span>
                        <p>{{ project.shortDescr }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height', 'categories'],
    data(){
        return {
            projects: [
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 1},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 2},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 3},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 4}
            ]
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';



/* ############ Flex/Grid ############# */
@media only screen and (min-width: 0px)  { 
    .works {
        display: grid;
        grid-template-rows: 50px 100px 1fr 100px;
        background-color: #f4f4f4;
    }
}



/* Styling */
.projectPreview {
    background-color: #b7b7b7;
}
.projectPreview div:nth-child(2) {
    background-color: white;
}

/* Layout */

/* Title Text */
.titleText {
    grid-row: 2/3;
    text-align: center;
    grid-column: 2/12;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

/* Catgory Picker */
.categories {
    display: none;
}
.textHolder {
    text-align: center;
}
/* Portoflio übersicht Div */
.projectPortfolio {
    grid-column: 2 / 12;
    grid-row: 3 / 4;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
    .projectPreview {
        flex-basis: 98%;
        margin-bottom: 20px;
        display: grid;
        grid-template-rows: 300px 90px;
        grid-template-columns: 1fr;
    }
    .projectPreview div:nth-child(2) {
        grid-row: 2/3;
        grid-column: 1/2;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        padding-top: 10px;
    }
@media only screen and (min-width: 600px)  { 
    .projectPreview {
        flex-basis: 48%;
        grid-template-rows: 250px 90px;
    }
}

@media only screen and (min-width: 1200px)  { 
    /* Catgory Picker */
    .works {
        grid-template-rows: 50px 100px 90px 1fr 100px;
    }
    .categories {
        display: inline-block;
        grid-column: 4 / 10;
        grid-row: 3/4;

    }
    .projectPortfolio {
        grid-row: 4 / 5;
    }
    .categories ul {
        display: flex;
        height: 100%;
        padding: 0px;
        margin: 0px;
        justify-content: space-around;
        align-items: center;
    }
    .categories ul li {
        list-style-type: none;
    }
    .projectPreview {
        grid-template-rows: 400px 90px;
    }
}
</style>