<template>
    <div>
        <h1>这是Account组件</h1>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>

        <router-view></router-view>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
/* 普通的style标签只支持普通的样式，
若想启动scss或less需要为style元素设置lang属性；
只要style标签是在.vue组件中定义的，推荐给style开启scoped属性*/
    body{
        div{
          font-style: italic;  
        }
    }
</style>