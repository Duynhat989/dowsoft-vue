<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, h, reactive } from "vue"
import Login from "./views/layouts/Login.vue"
import HeaderVue from './views/Header.vue'
import FooterVue from './views/Footer.vue'

const isShowLogin = ref(false)
async function closeLogin(){
    isShowLogin.value = false
  }
  async function openLogin(){
    isShowLogin.value = true
  }
</script>

<template>
  <HeaderVue :openLogin="openLogin"/>
  <RouterView />
  <Login v-if="isShowLogin" :closeLogin ="closeLogin"/>
  <FooterVue />
  <notifications position="top center" />
</template>

<style scoped>

</style>
