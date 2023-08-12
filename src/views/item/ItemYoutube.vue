
<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref, reactive, onMounted } from "vue";
import { defineProps, defineEmits } from 'vue';
const { data } = defineProps(['data']);
const dat = ref(null)
const array_lst = ref(null)
dat.value = data.value
console.log(dat.value)
onMounted(() => {
    array_lst.value = dat.value.formats
    array_lst.value.reverse()
    var downloads = document.querySelector('.download');
   downloads.addEventListener('click',()=>{
        const url = document.querySelector('#idYoutube').value;
        console.log(url)
        // Sử dụng fetch để tải dữ liệu từ URL
        window.open(url,'_blank')
   })
})
</script>
<template>
    <div class="item" v-if="dat">
        <div class="item_content flex">
            <div class="logo flex">
                <img :src="dat.thumbnail" alt="image avata" class="logo_show">
            </div>
            <div class="content">
                <h3>{{ dat.title }}</h3>
                <div class="description">
                    {{ dat.description }}
                </div>
                <div class="lst flex">
                    <select name="idYoutube" id="idYoutube">
                        <option v-for="(temp,index) in array_lst" class="btn" :value="temp.url" :hidden="temp.url.includes('manifest.')" :disabled="temp.url.includes('manifest.')">
                            <a class="download" :data-type="temp.ext">
                                <span>{{ `${temp.height}*${temp.width}` }} <i class='bx bx-arrow-to-bottom'></i></span>
                            </a>
                        </option>
                    </select>
                    <button class="download">{{ languagePack["[DOWNLOAD]"] }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hidden{
    display: none;
}
.flex {
    display: flex;
}

.logo_show {
    width: 100%;
    height: auto;

}

.item {
    color: #20223a;
    padding: 15px;
    width: 95%;
    max-width: 1000px;
    margin: auto;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 150px;
    align-items: center;
}

.content {
    padding: 5px;
    width: calc(100% - 150px);
    text-align: start;
    padding-left: 15px;
}

.content span {}

.download {
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background-color: #20223a;
    margin-left: 5px;
    display: block;
    width: 150px;
    color: white;
}

.lst {}

.description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    /* Số dòng cố định */
}
</style>