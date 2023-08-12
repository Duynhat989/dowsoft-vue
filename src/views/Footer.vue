<!-- Button.vue -->

<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
  } from "../languages/index";
import { defineProps, defineEmits } from 'vue';
const { openLogin } = defineProps(['openLogin']);
</script>

<template>
    <footer>
        <div class="footer flex">
            <div class="footer_form footer-left">
                <div class="content">
                <h3 for="category">{{ languagePack["[SUB_FUNCTION]"] }}</h3>
                    <ul class="submenu">
                        <li class="item-subitem">
                            <RouterLink to="/languages"> {{ languagePack['[LANGUAGES]'] }}</RouterLink>
                        </li>
                        <li class="item-subitem">
                            <RouterLink to="/location"> {{ languagePack['[LOCATION]'] }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer_form footer-center">
                <div class="content">
                    <h3 for="category">{{ languagePack["[SUB_CATEGORY]"] }}</h3>
                    <!-- <ul class="submenu">
                        <li class="item-subitem">
                            <a href="#">Kiểm tra tài khoản scam</a>
                        </li>
                        <li class="item-subitem">
                            <a href="#">Đặt lịch làm phần mềm</a>
                        </li>
                        <li class="item-subitem">
                            <a href="#">Đặt lịch làm website</a>
                        </li>
                    </ul> -->
                </div>
            </div>
            <div class="footer_form footer-right">
               <div class="content">
                    <h3 for="category">{{ languagePack["[IP_ADDRESS]"] }}</h3>
                    <h4>Your IP (Country)</h4>
               </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.content{
    text-align: start;
}
ul{
    padding: 0;
}
li{
    text-decoration: none;
    list-style:circle;
    line-height: 25px;
}
.submenu a{
    font-size: 13px;
}
.flex{
    display: flex;
    flex-wrap: wrap;
}
footer{
    background-color: #20223a;
}
i{
    font-size: 20px;
    margin-right: 3px;
}
a{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    display: block;
}
.footer{
    text-align: center;
    padding: 20px;
    width: 95%;
    max-width: 1200px;
    margin: auto;
}
.footer-center{
    text-align: center;
}
.footer_form{
    width: calc(100% / 3);
}
.footer-center .top{
    display: block;
}
@media screen and (max-width: 1000px) {
    .footer_form{
        width: calc(100% / 2);
    }
}
@media screen and (max-width: 600px) {
    .footer_form{
        width: calc(100%);
    }
    .footer_form li{
        line-height: 30px;
        list-style: none;
    }
}
</style>
