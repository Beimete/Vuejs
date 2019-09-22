<template>
    <div class="goodsinfo-container">

        <transition @before-enter="beforeEnter" @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbo="goodsSwipes" :isfull="false"></swiper>
				</div>
			</div>
		</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">{{ goodsInfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
                        </p>
                        <p>购买数量：<numbox 
                        @getcount="getSelectedCount"
                        :max="goodsInfo.stock_quantity"></numbox></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
		</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsInfo.goods_no}}</p>
						<p>库存情况：{{goodsInfo.stock_quantity}}件</p>
						<p>上架时间：{{goodsInfo.add_time | dateFormat}}</p>
					</div>
				</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(goodsId)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(goodsId)">商品评论</mt-button>
            </div>
		</div>

    </div>
</template>

<script>

import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
    data(){
        return{
            goodsId:this.$route.params.id,
            goodsSwipes:[],
            goodsInfo:{},
            ballFlag:false,
            selectedCount: 1
        }
    },
    created(){
        this.getGoodsSwipe(),
        this.getGoodsInfo()
    },
    methods:{
        getGoodsSwipe(){
            this.$http.get('api/getthumimages/'+ this.goodsId).then(result =>{
                if(result.body.status === 0){
                    result.body.message.forEach(item =>{
                        item.img = item.src
                    })
                    this.goodsSwipes = result.body.message
                }else{
                    Toast("获取商品轮播图失败！")
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.goodsId).then(result =>{
                if(result.body.status === 0){
                    this.goodsInfo = result.body.message[0];
                }else{
                    Toast("获取商品信息失败！")
                }
            })
        },
        goDesc(goodsId){
            this.$router.push({name:'goodsdesc', params:{goodsId}});
        },
        goComment(goodsId){
            this.$router.push({name:'goodscomment', params:{goodsId}});
        },
        addToShopCar(){
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done){
            el.offsetWidth;

            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('badge').getBoundingClientRect();

            const x_dist = badgePosition.left - ballPosition.left;
            const y_dist = badgePosition.top - ballPosition.top;


            el.style.transform = `translate(${x_dist}px, ${y_dist}px)`;
            el.style.transition='all 0.5s cubic-bezier(.4,-0.3,1,.68)';
            done()
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
        }
    },
    components:{
        'swiper':swiper,
        'numbox':numbox
    }
    
}
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;

        .now_price {
            color:red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer{
            display: block;

            button{
                margin: 10px 0;

            }
        }

        .ball{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 99;
            top:390px;
            left: 146px;
        }
    }
</style>