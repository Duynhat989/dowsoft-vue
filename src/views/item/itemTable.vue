
<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref,  reactive,onMounted } from "vue";
import { defineProps, defineEmits } from 'vue';
const { url } = defineProps(['url']);
const data = ref(null)
onMounted(()=>{
    data.value = url
    console.log(data.value)
    var downloads = document.querySelectorAll('.download');
    downloads.forEach(element => {
    element.addEventListener('click', () => {
        const url = element.dataset.url;
        
        // Sử dụng fetch để tải dữ liệu từ URL
        fetch(url)
            .then(response => response.blob()) // Chuyển dữ liệu thành Blob
            .then(blob => {
                const fileUrl = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = fileUrl;
                a.download = element.dataset.title;; // Đặt tên tệp tải xuống

                a.click();
                
                URL.revokeObjectURL(fileUrl);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

})
</script>
<template>
   <tr v-if="data"></tr>
</template>
<style scoped>
span i {
    font-size: 20px;
}
.flex{
    display: flex;
}
.logo_show{
    width: 100%;
    height: auto;

}
.item{
    color: #20223a;
    padding: 15px;
    width: 95%;
    max-width: 1000px;
    margin: auto;
    align-items: center;
    justify-content: center;
}
.logo{
    width: 150px;
    align-items: center;
}
.content{
    padding: 5px;
    width: calc(100% - 150px);
    text-align: start;
    padding-left: 15px;
}
.content span{
}
.download{
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background-color: #20223a;
    margin-right: 5px;
    margin-top: 5px;
    display: block;
    width: 150px;
}
.lst{

}
.description{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* Số dòng cố định */
}
</style>