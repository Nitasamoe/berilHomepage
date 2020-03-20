<template>
    <div class="works pageGrid" :style="worksStyle">
        <div class="titleText">
            <h1>Works</h1>
        </div>
        <div class="categories">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <div class="buttonUi">
                        <button><h4>{{category}}</h4></button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="projectPortfolio">
            <div class="projectPreview" v-for="project in projects" :key="project.id">
                <div></div>
                <div>
                    <h4>{{ project.name }}</h4>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height'],
    data(){
        return {
            categories: ['Product Service', 'Design Research', 'Interior'],
            projects: [
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id":1},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id":2},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id":3},
                {"name": "Super Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id":4}
            ]
        }
    },
    computed: {
        worksStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-end: " + this.columnLength + ";"
            cssStyle += "grid-column-start: 1;"
            cssStyle += "height:" + this.height + "px;"
            cssStyle += "display: grid;";
            cssStyle += "grid-template-rows: 140px  0.5fr 0.1fr repeat(7, 1fr);";
            return cssStyle;
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';

.works {
    background-color: #f4f4f4;
}

.categories {
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

.projectPortfolio {
    grid-column: 2 / 12;
    grid-row: 4 / 11;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

.projectPortfolio > div {
    flex-basis: 49%;
    height: 47%;
    background-color: #b7b7b7;
}

h1 {
    text-align: center;
    grid-column: 2/12;
}

.projectPreview {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
}

.projectPreview div:nth-child(2) {
    grid-row: 4/5;
    grid-column: 1/2;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.titleText {
    text-align: center;
    grid-column: 2/12;
    display: flex;
    justify-content: space-around;
    align-items: center;
}



</style>