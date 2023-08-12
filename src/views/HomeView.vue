<script setup>
  import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
  } from "../languages/index";
  import { ref, h, reactive } from "vue";
  import FreeDownload from '../views/section/Free.vue'
  import PayDownload from '../views/section/Pay.vue'
</script>
<template>
  <!-- <div>
    <Button text="Nhấn vào tôi" color="blue" @onClick="handleButtonClick" ></Button>
  </div> -->
  <!-- xin chào chi đó -->
  <div class="site">
    <FreeDownload />
    <!-- <PayDownload /> -->
  </div>
</template>
<style scoped>
.site{
  max-width: 1200px;
  margin: auto;
  min-height: calc(100vh - 45px);
  padding-top: 55px;
}
</style>