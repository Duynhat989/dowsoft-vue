
<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref,  reactive,onMounted } from "vue";
import { defineProps, defineEmits } from 'vue';
const { data } = defineProps(['data']);
const dat = ref(null)
dat.value = data.value
</script>
<template>
    <div class="item" v-if="dat">
        <div class="item_content flex">
            <div class="logo flex">
                <img style="max-height: 150px;object-fit: contain;" :src="dat.thumbnail" alt="image avata" class="logo_show">
            </div>
            <div class="content">
                <h3>{{ dat.title }}</h3>
                <div class="description">
                    {{ dat.description }}
                </div>
                <div class="description">
                    <!-- {{  }} -->
                </div>
                <div class="lst flex">
                    <div class="btn" v-for="temp in dat.formats">
                        <a
                            v-if="temp.ext"
                            class="download"
                            title="video.mp4"
                            target="_blank"
                            download
                            :key="temp.id"
                            :href="temp.url"
                        >
                            <span >{{ temp.height ? `MP4 ${temp.height}`:'MP3 Music' }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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