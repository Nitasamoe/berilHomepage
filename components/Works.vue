<template>
    <div class="works pageGrid">
        <div class="titleText">
            <span class="sectionTitle">Works</span>
        </div>
        <div class="categories">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <div class="buttonUi">
                        <button @click="filterByCategory(category.id)" class="hoverToBlack"><p>{{category.title}}</p></button>
                    </div>
                </li>
            </ul>
        </div>
        <ul class="projectPortfolio">
            <transition-group class="projectPortfolio" name="fadeInOut">
                <li class="projectPreview" v-for="project in projects" :key="project.id">
                    <div  class="workPicture"
                          :style="{backgroundImage: 'url('+project.photo+')'}"
                    ></div>
                    <div class="textBox">
                        <div class="textHolder">
                            <span class="headline">{{ project.name }}</span>
                        </div>
                    </div>
                </li>                
            </transition-group> 
        </ul>
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height', 'categories'],
    data(){
        return {
            projects: [
                {"name": "Service Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 1, "photo": "./picture/pictureOne.jpg", "category":"sd" },
                {"name": "Design Research Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 2, "photo": "./picture/pictureTwo.jpg" , "category":"dr"},
                {"name": "Interior Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 3, "photo": "./picture/pictureThree.jpg", "category":"i" },
                {"name": "Service Design Project", "shortDescr": "Lorum Ipsum Hipstum bipsum buspum", "id": 4, "photo": "./picture/pictureFour.jpg", "category":"sd" }
            ],
            show : true
        }
    },
    methods: {
        filterByCategory(id){
            var projects = this.projects;
            let newArr = [];
            projects.forEach(function(work, index) {
                if(work.category !== id) {
                    newArr.push(work);
                } else {
                    newArr.unshift(work);
                }
            })
            this.projects = newArr;
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


.fadeInOut-item {
    transition: all 0.5s;
}

.fadeInOut-move {
    transition: transform .5s ease-in-out;
 }

.fadeInOut-enter {
    opacity: 0;
}

.fadeInOut-ever-active {
    opacity: 0;
}

.fadeInOut-leave {

}

.fadeInOut-leave-active {
    /* transition: opacity 1s; */
    /* opacity: 0; */
}

@keyframes fadeInOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 1;
    }
}

/* Styling */
.projectPreview {
    background-color: #b7b7b7;
}
.textBox {
    background-color: white;
}
.workPicture {
    background-size: cover;
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
        grid-template-rows: 300px 60px;
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
        grid-template-rows: 250px 60px;
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
        grid-template-rows: 400px 60px;
    }
}
</style>