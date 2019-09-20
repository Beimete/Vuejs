<template>
    <div>
        <h1>这个是 App 组件</h1>

        <mt-button type="default" icon="back" @click="show">default</mt-button>
        <mt-button type="danger" size="normal" icon="more" plain>danger</mt-button>
        <mt-button type="primary" size="small" disabled>primary</mt-button>

        <!-- <mybtn type="primary">12345</mybtn> -->

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui'

    export default{
        data(){
           return{
               toastInstance:null
           } 
        },
        created(){
            this.getList()
        },
        methods:{
            getList(){
                this.show();
                setTimeout( () =>{
                    this.toastInstance.close();
                }, 3000)
            },
            show(){
                this.toastInstance = Toast({
                    message:'提示消息',
                    position:'middle',
                    duration:-1,
                    iconClass:'glyphicon glyphicon-ok',
                    className:'mytoast'
                });
            }
        }
    }
</script>

<style>
</style>