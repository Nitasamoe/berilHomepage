<template>
    <div class="works pageGrid" :style="worksStyle">
        <div class="titleText">
            <h2>Works</h2>
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
                        <h4 class="headline">{{ project.name }}</h4>
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
    },
    computed: {
        worksStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-start: 1;"
            cssStyle += "display: grid;";
            cssStyle += "grid-template-rows: 140px 100px 1fr 80px";
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
.works {
    background-color: #f4f4f4;
    padding-top: 100px;
}
.projectPreview {
    background-color: #b7b7b7;
}
.projectPreview div:nth-child(2) {
    background-color: white;
}

/* Layout */

/* Title Text */
.works {
    height: 1800px;
}
.titleText {
    text-align: center;
    grid-column: 2/12;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.headline { /* bigger text */
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    font-family: var(--mainFont);
    font-style: normal;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 1.4;
    color: #262626;
}
/* Catgory Picker */
.categories {
    display: none;
}

/* Portoflio übersicht Div */
.projectPortfolio {
    grid-column: 2 / 12;
    grid-row: 2 / 11;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
    .projectPreview {
        flex-basis: 98%;
        height: auto;
        margin-bottom: 20px;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: 1fr;
    }
    .projectPreview div:nth-child(2) {
        grid-row: 4/5;
        grid-column: 1/2;
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        justify-items: center;
        padding-top: 10px;
    }
        .textHolder {
            
        }

@media only screen and (min-width: 600px)  { 
    .works {
        height: 1000px;
    }
    .projectPreview {
        flex-basis: 48%;
        height: 400px;
    }
}

@media only screen and (min-width: 1200px)  { 
    .works {
         height: 1500px;
    }
    /* Projekt Portfolio size change to have space for categories */
    .projectPortfolio {
        grid-row: 3 / 4;
        height: 1200px;
    }
    .projectPreview {
        height: auto;
    }
    /* Catgory Picker */
    .categories {
        display: inline-block;
        grid-column: 4 / 10;
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
}
</style>