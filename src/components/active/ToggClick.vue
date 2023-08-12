<!-- Button.vue -->

<script setup>
import { defineProps, defineEmits } from 'vue';
import { RouterLink } from 'vue-router'
const { text,router } = defineProps(['text', 'router']);

</script>

<template>
    <RouterLink :to="router" style="color: rgb(0, 0, 0);" class="btn">{{ text }}</RouterLink>
</template>

<style scoped>
.btn{
    padding: 13px 30px;
    border: none;
    background-color: palegreen;
}
</style>
