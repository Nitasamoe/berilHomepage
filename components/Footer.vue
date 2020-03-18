<template>
    <div class="footer" :style="footerStyle">
        <div class="contactData">
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
            cssStyle += "grid-template-columns: 2fr repeat(10, 1fr) 2fr;";
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

.footer > div {
    grid-column: 2 / 12;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

</style>