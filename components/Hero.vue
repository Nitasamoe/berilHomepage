<template>
    <div class="hero" :style="heroStyle">
            <div>
                <h1>Beril Beden</h1>
                <h3>Never Stop never stopping</h3>
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
            return cssStyle
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';

div {
    background-color: #b7b7b7;
    height: 30px;
}

.hero > div {
    height: 130px;
    text-align: center;
}

</style>