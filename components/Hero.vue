<template>
    <div class="hero" :style="heroStyle">
            <div v-bind:style="{ backgroundImage: 'url(' + require('~/static/heroBack.png') + ')'}">
                <div class="heroText">
                    <h1>Beril Beden</h1>
                    <h3>Never Stop never stopping</h3>
                </div>
            </div>

            
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height'],
    computed: {
        heroStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-start: 1;";
            cssStyle += "grid-column-end: " + this.columnLength+ ";";
            cssStyle += "height:" + this.height + "px;";
            cssStyle += "display:flex;";
            cssStyle += "justify-content: center;";
            cssStyle += "align-items: center;";
            cssStyle += "background-color: #303030;";
            return cssStyle
        }
    }
}
</script>


<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';

div {
    height: 30px;
}

.hero > div {
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    display: grid;
    grid-template-columns: 1fr 8fr 30fr;
    grid-template-rows: 1fr 1fr 1fr;
}

.heroText {
    height: 130px;
    text-align: center;
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    color: white;
}

</style>