<template>
    <div class="shopcart-container">
       <div class="goods-list" v-for="(item, i) in shopcartList" :key="item.id">
           <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path">  
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                               <span class="price">￥{{item.sell_price}}</span>
                               <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                               <a href="#" @click.prevent="remove(item.id, i)">删除</a> 
                            </p>
                        </div>
					</div>
				</div>
			</div>
       </div>

       <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner calculate">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品<span class="fontcolor">{{ $store.getters.getGoodsCountAndAmount.count}}</span>件，总价 
                        <span class="fontcolor">￥{{ $store.getters.getGoodsCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>

        <p>{{ $store.getters.getGoodsSelected}}</p>
    </div>
</template>

<script>

    import {Toast} from 'mint-ui'
    import numbox from '../subcomponents/shopcart_numbox.vue'

    export default {
        data(){
            return{
                shopcartList:[]
            }
        },
        created(){
            this.getShopcartList()
        },
        methods:{
            getShopcartList(){
                var idArr = [];
                this.$store.state.cart.forEach(item =>idArr.push(item.id));
                if(idArr.length <= 0){
                    return;
                }
                this.$http.get('api/goods/getshopcarlist/' + idArr.join(","))
                .then(result =>{
                    if(result.body.status === 0){
                        this.shopcartList = result.body.message;
                    }else{
                        Toast("获取购物车列表失败！")
                    }
                })
            },
            remove(id, index){
                this.shopcartList.splice(index, 1);
                this.$store.commit('removeFromCart', id);
            },
            selectedChanged(id, val){
                console.log(id + '----'+val)
                this.$store.commit('updatedGoodsSelected', {id:id, selected:val})
            }
        },
        components:{
            'numbox':numbox
        }
    }
</script>

<<style lang="scss" scoped>
    .shopcart-container{
        background-color: #eee;
        overflow: hidden;

        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items:center;
            }
            img{
                width: 60px;
                height: 60px; 
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color:red;
                    font-weight: bold;
                }
            }
        }

        .calculate{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .fontcolor{
                color:red;
                font-weight:bold;
                font-size: 16px;
            }

        }
    }
</style>