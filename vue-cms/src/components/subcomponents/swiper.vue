<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbo" :key="item.id">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    props:["lunbo"]
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height:200px;

        .mint-swipe-item{
           &:nth-child(1){
               background-color:red; 
           };
           &:nth-child(2){
               background-color:lightgreen; 
           };
           &:nth-child(3){
               background-color:yellow; 
           };
           
           img{
               width: 100%;
               height: 100%;
           }
        }
    }
</style>