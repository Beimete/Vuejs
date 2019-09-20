<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunboList" :key="item.id">
            <img :src="item.img" alt="">
        </mt-swipe-item>
        
        </mt-swipe>
       <h3>HomeContainer</h3> 
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

    export default{
        data(){
            return {
               lunboList:[] 
            }
        },
        created(){
            this.getLunbo()
        },
        methods:{
            getLunbo(){
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(
                    result =>{
                        if(result.body.status === 0){
                            this.lunboList = result.body.message;
                        }else{
                            Toast('加载轮播图失败...')
                        }
                    })
            }
        }
    }
</script>

<<style lang="scss" scoped>
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