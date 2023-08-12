<script setup>
import PayCard from '../../components/card/pay-card.vue'
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
          <h3><i class='bx bxl-graphql' ></i> {{ languagePack["[PAY]"] }}</h3>
        </div>
        <div class="content flex">
          <PayCard icon="bxl-tiktok" color="black" unit="[PAY_TIKTOK]" router="/video-tiktok" name="TIKTOK PREMIUM"/>
          <PayCard icon="bxl-youtube" color="red" unit="[PAY_YOUTUBE]" router="/video-YOUTUBE" name="YOUTUBE PREMIUM"/>
          <PayCard icon="bxl-facebook" color="blue"  unit="[PAY_FACEBOOK]" router="/video-FACEBOOK" name="FACEBOOK PREMIUM"/>
        </div>
     </div>
  </section>
</template>

<style scoped>
section{
  padding: 10px;
}
.title{
   /* background-color: #20223a; */
   padding: 10px;
   border-radius: 10px;
}
h3{
  color: #20223a;
}
</style>