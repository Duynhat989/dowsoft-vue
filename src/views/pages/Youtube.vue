<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref,reactive, onMounted } from "vue";
import request from '../../utils/request'
import { notify } from "@kyvg/vue3-notification"
import itemYoutube from '../item/ItemYoutube.vue'
import Loadding from '../item/Loading.vue'

const ytlink = ref('')
const statusLoaddingSingle = ref(false)
const loaderRequest = ref(false)
const lst_video = reactive({})
async function loadUrlYoutube(){
    statusLoaddingSingle.value = false
    let typeLink = 0
    if(ytlink.value.includes('/watch?')){
        typeLink = 1
    }else{
        if(ytlink.value.includes('/@')){
            typeLink = 2
        }
    }
    if(typeLink == 0){
        notify({
            title: languagePack["[NOTIFY_SUCCESS]"],
            text: languagePack["[NOTIFY_ERROR_URL]"],
            type: "error",
        });
        return
    }
    //thực hiện request 
    get_video_link()

}
async function get_video_link(){
    try {
        loaderRequest.value = true
        var result = await request.post('youtube/download-video',{
        url:ytlink.value
        })
        if(result.data.status){
            //thành công 
            lst_video.value = result.data.data
            console.log(lst_video.value)
        }
        else{
            notify({
                title: languagePack["[NOTIFY_FAILD]"],
                text: languagePack["[NOTIFY_FAILD_SERVER]"],
                type: "error",
            });
            return
        }
    } catch (error) {
        notify({
            title: languagePack["[NOTIFY_FAILD]"],
            text: languagePack["[NOTIFY_FAILD_SERVER]"],
            type: "error",
        });
        return
    }
    loaderRequest.value = false
    statusLoaddingSingle.value = result.data.status
}
onMounted(()=>{
    document.documentElement.scrollTop = 0
})
</script>
<template>
    <div class="site">
        <div class="site_content">
            <div class="title">
                <h1 style="color: black;">Tải video youtube</h1>
                <P>NO LOGO, NO WATERMASK</P>
            </div>
            <Loadding v-if="loaderRequest" />
            <div class="search">
                <div class="search-box">
                    <input v-model="ytlink" type="text" class="search-box__input" :placeholder="languagePack['[URL_YOUTUBE]']">
                </div>
                <div class="search-icon">
                    <button @click="loadUrlYoutube()" class="btn">{{ languagePack["[DOWNLOAD]"] }}</button>
                </div>
            </div>
            <div class="link">
                <itemYoutube v-if="statusLoaddingSingle" :data="lst_video" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.site {
    max-width: 1200px;
    margin: auto;
    min-height: calc(100vh - 45px);
    padding-top: 65px;
    text-align: center;
}

.btn {
    min-width: 200px;
    padding: 10px 10px;
    border: none;
    background-color: #20223a;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: all 0.4s;

}

.btn:hover {
    background-color: #20223a;
    transform: scale(1.05);
}

.search {
    width: 100%;
}

.search-box {
    width: 100%;
    padding: 15px;
}

.search-box__input {
    padding: 8px 10px;
    width: 80%;
    max-width: 1000px;
    margin: auto;
    font-size: 1.1em;
}

h1 {
    color: #20223a;
    font-weight: 700;
    font-size: 2em;
    text-transform: uppercase;
}

.title p {
    color: #20223a;
}</style>