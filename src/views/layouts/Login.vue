<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref, computed, reactive } from "vue";
import { defineProps, defineEmits } from 'vue';
const { closeLogin,uploadInfo } = defineProps(['closeLogin', 'uploadInfo']);
import auth from '../../service/auth.service'
import { notify } from "@kyvg/vue3-notification"
import { RouterLink, RouterView,useRouter } from 'vue-router'
const router = useRouter();

const email = ref('')
const password = ref('')

const m_showPassword = ref(false)
async function loginEmailPassword(){
    if(!m_showPassword.value)
    {
        m_showPassword.value = true
        return
    }
    else{
        
        auth
        .login({
            email:email.value,
            password:password.value
        })
        .then(() => {
            notify({
                title:languagePack["[NOTIFY_SUCCESS]"],
                text: languagePack["[NOTIFY_SUCCESS_LOGIN]"],
                type: "success",
            });
            setTimeout(()=>{
                location.reload()
            })
        })
        .catch((error) => {
            notify({
                title:languagePack["[NOTIFY_FAILD]"],
                text: languagePack["[NOTIFY_FAILD_LOGIN]"],
                type: "error",
            });
        });
    }
} 
</script>
<template>
    <div class="login">
        <div class="login_content">
            <div class="title">
                <!-- {{ languagePack["[SIGNIN]"] }} -->
                <h1><span style=" color: greenyellow;">DOW</span>SOFT</h1>
                <span>{{ languagePack["[DESCIPTION]"] }}</span>
            </div>
            <label for="close" @click="closeLogin()" class="close"><i class='bx bx-x'></i></label>
            <div class="group-input">
                <input type="text" class="email" v-model="email" :placeholder="languagePack['[INPUT_EMAIL]']">
            </div>
            <div class="group-input" v-if="m_showPassword">
                <input type="password" class="password" v-model="password" :placeholder="languagePack['[INPUT_PASSWORD]']">
            </div>
            <!-- Email chưa tồn tại! -->
            <label for="error" class="error"></label>
            <div class="group-input">
                <button class="btn" @click="loginEmailPassword()">{{ languagePack["[NEXT]"] }} <i class='bx bx-right-arrow-alt'></i></button>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .error{
        color: red;
    }
    h1{
        font-weight: 600;
        padding: 10px 0px;
    }
    .login{
        width: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .login_content{
        width: 450PX;
        margin: auto;
        margin-top: 5%;
        background-color: #20223a;
        text-align: center;
        padding: 35px 20px;
        border-radius: 10px;
        position: relative;
    }
    .close{
        position: absolute;
        /* background-color: red; */
        color: rgb(255, 0, 0);
        right: 0;
        top: 0;
        padding: 5px;
        display: block;
        width: 36px;
        height: 33px;
        cursor: pointer;
        border-radius: 50%;
        font-size: 1.6em;
    }
    .group-input{
        padding: 10px;
    }
    .group-input input{
        padding: 9px 10px;
        width: 90%;
        border-radius: 5px;
        border: none;
        outline: none;
    }
    input:focus-visible{
        outline: double 2px #88ffa5;
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
        background-color: white;
        color: #20223a;
        cursor: pointer;
    }
</style>