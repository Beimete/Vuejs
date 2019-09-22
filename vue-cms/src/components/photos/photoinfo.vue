<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{ photoinfo.click}}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="photo-thumbnails">
            <vue-preview v-if="slides.length > 0" :slides="slides" @close="handleClose"></vue-preview>
            <div v-else  class="tip">
                <p>没有任何图片</p>
            </div>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>

import comment from '../subcomponents/comment.vue'

import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:{},
            slides:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbnails()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/' + this.id).then(result =>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast("获取图片详细信息失败！")
                }
            })
        },
        getThumbnails(){
            this.$http.get('api/getthumimages/' + this.id).then(result =>{
                if(result.body.status === 0){
                    result.body.message.map(item =>{
                        item.msrc = item.src
                        item.w = 600
                        item.h = 400
                        return item
                    });

                    this.slides = result.body.message;
                }else{
                    Toast("获取缩略图失败！")
                }
            })
        },
        handleClose(){
            console.log('close event')
        }
    },
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding:3px;
        h3{
            color:#26A2FF;
            font-size: 15px;
            text-align:center;
            margin:15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content{
            font-size: 13px;
            line-height: 30px;
        }
    }

    .photo-thumbnails{
        padding:0 5px;
        padding: 10px 0;
            .my-gallery {
                display: flex;
                flex-wrap: wrap;
                figure {
                    width: 33.33333%;
                    margin: 0;
                    padding: 0 10px;
                    img {
                        width: 100%;
                        box-shadow: 0 0 8px 4px #a1a499;
                        border-radius: 5px;
                    }
                }
            }
            .tip {
                p {
                    font-size: 16px;
                    text-align: center;
                }
                
            }
    }
</style>