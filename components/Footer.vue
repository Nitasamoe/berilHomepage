<template>
    <div class="footer pageGrid">
        <div class="contactData">
            <hr>
            <h3>Contact Me</h3>
            <p>fasfasf asfd asdfasdf a asdfasf</p>
            <p>fas a afasf asda</p>
        </div>
        
                
    </div>    
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';
@import '~/static/css/baseUi.css';

hr {
    width: 100%;
}

.footer {
    display: grid;
    height: 200px;
    background-color: #f4f4f4;
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