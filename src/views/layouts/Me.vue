<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../languages/index";
import { ref,reactive, onMounted } from "vue";
const info = ref(null)
async function loadInfo(){

}
onMounted(() => {
    document.documentElement.scrollTop = 0
    loadInfo()
})
</script>
<template>
    <div class="site">
        <div class="site_content">
            <div class="person">
                <div class="cover">
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20210115/pngtree-geography-tourism-tourism-background-map-global-travel-image_518638.jpg" alt="cover">
                </div>
                <div class="user">
                    <img src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png" alt="avata" class="avata">
                </div>
                <div class="info">
                    <h2>{{ languagePack["[PERSON]"] }}</h2>
                    <span>Email:vietduy989kc@gmail.com</span>
                </div>
            </div>
            <div class="account_type">
                <div class="title_type">{{ languagePack["[LICENSE_NOW]"] }}</div>
                <div class="type" style="background-color: greenyellow;">{{ languagePack["[LICENSE_FREE]"] }}</div>
            </div>
            <div class="connect">
                <label for="">API Connect: </label>
                <Input placeholder="No avaliable"></Input>
            </div>
            <label for="license" class="license_title">{{ languagePack["[LIST_SERVICES]"] }}</label>
            <div class="license flex">
                <div class="license-item">
                    <div class="show">
                        <div class="name">
                            <i :class="[`bx bxl-tiktok`]"></i>
                            <i :class="[`bx bxl-youtube`]"></i>
                            <i :class="[`bx bxl-facebook`]"></i>
                        </div>
                        <div class="type_license">
                            {{ languagePack["[LICENSE_TEST]"] }}
                        </div>
                        <div class="price">
                            <ul>
                                <li class="price">
                                    0$/7 {{ languagePack["[DAY]"] }}
                                </li>
                                <li class="price">
                                   ------
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="btn">
                        {{ languagePack["[BUY_LICENSE]"] }}
                    </div>
                </div>
                <div class="license-item">
                    <div class="show">
                        <div class="name">
                            TIKTOK
                        </div>
                        <div class="type_license">
                            {{ languagePack["[LICENSE_PREMIUM]"] }}
                        </div>
                        <div class="price">
                            <ul>
                                <li class="price">
                                    9$/{{ languagePack["[MONTH]"] }}
                                </li>
                                <li class="price">
                                    89$/{{ languagePack["[YEAR]"] }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="btn">
                        {{ languagePack["[BUY_LICENSE]"] }}
                    </div>
                </div>
                <div class="license-item">
                    <div class="show">
                        <div class="name">
                            YOUTUBE
                        </div>
                        <div class="type_license">
                            {{ languagePack["[LICENSE_PREMIUM]"] }}
                        </div>
                        <div class="price">
                            <ul>
                                <li class="price">
                                    9$/{{ languagePack["[MONTH]"] }}
                                </li>
                                <li class="price">
                                    89$/{{ languagePack["[YEAR]"] }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="btn">
                        {{ languagePack["[BUY_LICENSE]"] }}
                    </div>
                </div>
                <div class="license-item">
                    <div class="show">
                        <div class="name">
                            FACEBOOK
                        </div>
                        <div class="type_license">
                            {{ languagePack["[LICENSE_PREMIUM]"] }}
                        </div>
                        <div class="price">
                            <ul>
                                <li class="price">
                                    9$/{{ languagePack["[MONTH]"] }}
                                </li>
                                <li class="price">
                                    89$/{{ languagePack["[YEAR]"] }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="btn">
                        {{ languagePack["[BUY_LICENSE]"] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.price{
    font-size: 20px;
    line-height: 35px;
    font-weight: 600;
}
.account_type{
    line-height: 30px;
    padding: 15px;
}
.license_title{
    font-size: 30px;
    padding: 30px;
}
ul{
    padding: 0;
}
li{
    list-style: none;
}
.license{
    width: 100%;
    margin-top: 40px;
}
.show{
    padding-bottom: 20px;
}
.show .name{
    padding: 20px;
    font-size: 35px;
}
.license-item{
    width: calc((100% - 80px) / 4);
    margin: 10px 10px;
    padding: 10px;
    line-height: 35px;
    background-color: yellowgreen;
}
h2{
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.cover{
    width: 100%;
    height: 200px;
}
.person{
    position: relative;
}
.cover img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.user{
    width: 100%;
    position: absolute;
    top: 30px;
}
.user img{
    min-width: 150px;
    border-radius: 50%;
    width: 10%;
    object-fit: cover;
}
.site{
    max-width: 1200px;
    margin: auto;
    min-height: calc(100vh - 45px);
    padding-top: 55px;
    text-align: center;
    color: #20223a;
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
h1{
    color: #20223a;
    font-weight: 700;
    font-size: 3em;
}
.title p{
    color: #20223a;
}
</style>