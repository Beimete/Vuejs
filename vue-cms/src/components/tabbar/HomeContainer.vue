<template>
    <div>
        <swiper :lunbo="lunboList" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-pengyouquan"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <span class="mui-icon mui-icon-camera"></span>
                    <div class="mui-media-body">图片分享</div>
                    </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble-filled"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

    export default {
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
                this.$http.get('api/getlunbo').then(
                    result =>{
                        if(result.body.status === 0){
                            this.lunboList = result.body.message;
                        }else{
                            Toast('加载轮播图失败...')
                        }
                    })
            }
        },
        components:{
            "swiper":swiper
        }
    }
</script>

<<style lang="scss" scoped>
    
    .mui-grid-view.mui-grid-9{
        background-color:#fff;
        border:none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;

        .mui-icon.mui-icon-pengyouquan{
        color:lightgreen;
        }

        .mui-icon.mui-icon-camera{
        color:cyan;
        }

        .mui-icon.mui-icon-extra.mui-icon-extra-cart{
        color:orange;
        }

        .mui-icon.mui-icon-chatbubble-filled{
        color:lightgreen;
        }

        .mui-icon.mui-icon-videocam{
        color:cyan;
        }

        .mui-icon.mui-icon-phone{
        color:orange;
        }

        .mui-media-body{
            font-size:13px;
        }
    }

    
</style>