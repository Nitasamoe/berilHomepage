<template>
    <div :style="navBarStyle">

    </div>    
</template>

<script>
export default {
    props: ['columnLength', 'height'],
    data(){
            return {
                quantity: 5
            }
        },
    computed: {
        navBarStyle(){
            return "grid-column-start: 1; grid-column-end: " + this.columnLength + "; height:" + this.height + "px;"  
        }
    }
}
</script>

<style scoped>
div {
    background-color: black;
    height: 30px;
}
</style>