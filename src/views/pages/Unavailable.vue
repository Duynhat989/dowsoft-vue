<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";

</script>
<template>
    <div class="site">
        <div class="site_content">
            <div class="title">
                <h1>404</h1>
                <P>This page is currently not supported</P>
            </div>
        </div>
    </div>
</template>
<style scoped>

.site{
    max-width: 1200px;
    margin: auto;
    min-height: calc(100vh - 45px);
    padding-top: 65px;
    text-align: center;
}
.btn{
    min-width: 200px;
    padding: 10px 10px;
    border: none;
    background-color: #20223a;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.4s;
    
}
.btn:hover{
    background-color: #20223a;
    transform: scale(1.05);
}
.search{
    width: 100%;
}
.search-box{
    width: 100%;
    padding: 15px;
}
.search-box__input{
    padding: 8px 10px;
    width: 80%;
    max-width: 1000px;
    margin: auto;
    font-size: 1.1em;
}
h1{
    color: #20223a;
    font-weight: 700;
    font-size: 6em;
}
.title p{
    color: #20223a;
}
</style>