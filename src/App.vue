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

getlocation()
async function getlocation(){
    let locations = JSON.parse(localStorage.getItem("locations")) || null;
    if (locations == null) {
      const result = await languagesLocation();
      locations = {
        language: result.country
      };
      localStorage.setItem("locations", JSON.stringify(locations));
      location.reload()
    }
}
async function languagesLocation() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  var response = await fetch("https://api.country.is/", requestOptions);
  var result = await response.json();
  return result;
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
