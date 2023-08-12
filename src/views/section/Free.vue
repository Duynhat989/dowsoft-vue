<script setup>
import FreeCard from '../../components/card/free-card.vue'
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
  } from "../../languages/index";
</script>

<template>
  <section>
     <div class="free-download">
        <div class="title">
          <h3><i class='bx bxl-graphql' ></i> {{ languagePack["[FREE]"] }}</h3>
        </div>
        <div class="content flex">
          <FreeCard icon="bxl-tiktok" color="black" unit="[FREE_TIKTOK]" router="/video-tiktok" name="TIKTOK"/>
          <FreeCard icon="bxl-youtube" color="red" unit="[FREE_YOUTUBE]" router="/video-youtube" name="YOUTUBE"/>
          <FreeCard icon="bxl-facebook" color="blue"  unit="[FREE_FACEBOOK]" router="/video-facebook" name="FACEBOOK"/>
        </div>
     </div>
  </section>
</template>

<style scoped>
section{
  padding: 10px;
}
.title{
    /* background-color: #3b3d5049; */
    padding: 10px;
    border-radius: 10px;
    margin: auto;
}
h3{
  color: #20223a;
}
</style>