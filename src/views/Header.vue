<!-- Button.vue -->

<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
  } from "../languages/index";
import { RouterLink, RouterView,useRouter } from 'vue-router'
import { defineProps, defineEmits } from 'vue';
import store from "../stores";
import { computed } from 'vue'
const router = useRouter();
const loggedIn = computed(() => store.getters.usersss) 
const { openLogin } = defineProps(['openLogin']);
function logout(){
    store.dispatch('logout')
    router.push('/')
}
</script>

<template>
    <header>
        <div class="wapper flex">
            <div class="wapper-left">
                <div class="title">
                    <a href="/" > <span>DOW</span><span style="color: aliceblue;">SOFT</span></a>
                    <!-- <sub><span style="color: rgb(7, 82, 148);">.</span><span style="color: rgb(255, 0, 0);">one</span></sub> -->
                </div>
            </div>
            <div class="wapper-right">
                <button class="btn"><i class='bx bx-menu'></i></button>
                <ul class="menu flex">
                    <li class="menu-item">
                        <RouterLink to="/"><i class='bx bx-home-alt'></i> {{ languagePack['[HOME]'] }}</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink to="/rules"><i class='bx bx-list-check' ></i> {{ languagePack['[CATEGORY]'] }}</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink to="/rules"><i class='bx bx-check-double' ></i> {{ languagePack['[RULE]'] }}</RouterLink>
                    </li>
                    <li class="menu-item">
                        <a @click="openLogin()" v-if="!loggedIn"><i class='bx bx-user-circle'></i> {{ languagePack['[SIGNIN]'] }}</a>
                        <RouterLink to="/me" v-else><i class='bx bx-user-circle' ></i> {{ languagePack['[MY_ACCOUNT]'] }}</RouterLink>
                    </li>
                    <li class="menu-item">
                        <a @click="logout()" v-if="loggedIn"><i class='bx bx-log-in-circle'></i> {{ languagePack['[LOGOUT]'] }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.btn{
    background: none;
    border: none;
    padding: 10px;
    color: white;
    display: none;
}
.btn i {
    font-size: 40px;
}
.flex{
    display: flex;
}
i{
    font-size: 20px;
    margin-right: 3px;
}
a{
    display: flex;
    align-items: center;
    cursor: pointer;
}
header{
 width: 100%;
 height: 55px;
 background-color: #20223a;
 position: fixed;
 z-index: 1;
}
.title span{
    font-weight: 800;
    color: greenyellow;
    font-size: 30px;
}
sub span{
    font-size: 500 !important;
}
.wapper{
    max-width: 1280px;
    width: 100%;
    margin: auto;
    /* justify-content: center; */
    align-items: center;
    height: 100%;
}
.wapper-left{
    width: 150px;
}
.wapper-right{
    text-align: right;
    width: calc(100%-150px);
    margin-left: auto;
}
.menu-item{
    min-width: 80px;
    list-style: none;
    padding: 0 20px;
}
.menu-item:hover a{
    transform: scale(1.05);
    color: #4bff14;
}
@media screen and (max-width: 1000px) {
  .menu{
    background-color: #20223a;
    width: 200px;
    padding: 0;
    margin-top: -6px;
  }
  .menu-item{
    line-height: 35px;
  }
  .wapper{
    align-items: start;
  }
  .wapper-right .menu{
    display: none;
  }
  .wapper-right:hover .menu{
    display: block;
  }
  .btn{
    display: inline;
  }
    .title{
        padding: 3px;
    }
}
</style>
