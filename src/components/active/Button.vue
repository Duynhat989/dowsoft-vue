<!-- Button.vue -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const { text, color } = defineProps(['text', 'color']);
const emit = defineEmits();
const handleClick = () => emit('onClick');
</script>

<template>
  <button :style="{ backgroundColor: color }" @click="handleClick" class="btn">{{ text }}</button>
</template>

<style scoped>
.btn{
    padding: 5px 20px;
    border: none;
    background-color: palegreen;
}
</style>


<!-- Phần cha được nhận ở đây -->
<!-- ParentComponent.vue -->

<!-- <template>
    <div>
      <Button
        text="Nhấn vào tôi"
        color="blue"
        @onClick="handleButtonClick"
      />
    </div>
  </template>
  
  <script setup>
  import Button from './Button.vue';
  const handleButtonClick = () => {
    // Xử lý sự kiện khi Button được nhấp vào
    console.log('Button đã được nhấp vào!');
  };
  </script>
  
  <style>
  /* Các style của ParentComponent có thể được thêm ở đây */
  </style>
   -->