<script setup>
import ButtonNew from '../active/ToggClick.vue';
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { defineProps, defineEmits } from 'vue';
const { text,icon,color,unit,router,name } = defineProps(['text', 'icon','color','unit','router','name']);
const dat = languagePack[unit]
</script>

<template>
  <div class="card">
        <div class="card-content" style="background-color: rgb(255, 255, 255);">
            <!-- <div class="line">
                <i class='bx bx-signal-5' ></i>
                {{ languagePack['[AVALIBLE]'] }}
            </div> -->
            <div class="top">
                <div class="logo">
                    <i :class="[`bx ${icon}`]"></i>
                </div>
            </div>
            <div class="title">
                <h2>{{ name }}</h2>
            </div>
            <div class="center">
                <ButtonNew 
                    :text="languagePack['[USE]']" color="blue" :router="router"
                />
            </div>
            <div class="buttom">
                <ul class="rule">
                    <li v-if="dat != undefined" class="rule-item" v-for="item in dat.split(',')"> {{ item }}</li>
                </ul>
            </div>
        </div>
     </div>
</template>
<!-- <i class='bx bxs-hand-right' ></i> -->
<style scoped>
.card{
    width: calc(100%/3);
    padding: 10px;
}
.card-content{
    min-height: 100px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(128, 128, 128, 0.192);
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s;
    /* background-image: linear-gradient( 95.2deg, rgb(225, 255, 248) 26.8%, rgba(192,229,246,1) 64% ); */
    color: #20223a;
    position: relative;
}
.card-content:hover{
    transform: scale(1.02);
}
.logo{
    font-size: 4em;
    text-align: center;
    padding: 30px 0px;
}
.center{
    text-align: center;
    padding: 20px 0px;
}
.buttom{
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 40px;
}
.rule{
    text-align: center;
    margin: 0;
    padding: 0;
}
.rule-item{
    list-style: none;
    line-height: 30px;
}
.title{
    text-align: center;
}
.title h2{
    font-weight: 600;
    text-transform: uppercase;
    padding: 20px 0px;
}
@media screen and (max-width: 1000px){
    .card{
        width: calc(100%/2);
    }
}
@media screen and (max-width: 600px){
    .card{
        width: calc(100%);
    }
}
</style>