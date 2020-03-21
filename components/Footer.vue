<template>
    <div class="footer pageGrid" :style="footerStyle">
        <div class="contactData">
            <hr>
            <h2>Contact Me</h2>
            <p>fasfasf asfd asdfasdf a asdfasf</p>
            <p>fas a afasf asda</p>
        </div>
        
                
    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height'],
    computed: {
        footerStyle(){
            let cssStyle = "";
            cssStyle += "grid-column-start: 1;";
            cssStyle += "grid-column-end: " + this.columnLength+ ";";
            cssStyle += "height:" + this.height + "px;";
            cssStyle += "display:grid;";
            cssStyle += "backgroundColor: #f4f4f4;";
            return cssStyle
        }
    }
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';

hr {
    width: 100%;
}

.footer > div {
    grid-column: 2 / 12;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 600px)  { 
    hr {
        display: none;
    }
    .footer > div {
        align-items: flex-end;
    }
}
</style>