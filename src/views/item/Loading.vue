<script setup>
</script>
<template>
    <div class="loading">
        <span class="loader"></span>
    </div>
</template>
<style scoped>
.loading{
    width: 300px;
    margin: auto;
}
.loader{
    display: block;
    position: relative;
    height: 22px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    border: 2px solid #FFF;
    border-radius: 20px;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #FF3D00;
    animation: ballbns 3s ease-in-out infinite;
  }
  
  @keyframes ballbns {
    0% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: 
        -5px 0 0 -1px rgba(255, 61, 0, 0.9),
        -10px 0 0 -2px rgba(255, 61, 0, 0.8),
        -15px 0 0 -4px rgba(255, 61, 0, 0.6),
        -20px 0 0 -6px rgba(255, 61, 0, 0.4),
        -25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    49% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: 
        -5px 0 0 -1px rgba(255, 61, 0, 0.9),
        -10px 0 0 -2px rgba(255, 61, 0, 0.8),
        -15px 0 0 -4px rgba(255, 61, 0, 0.6),
        -20px 0 0 -6px rgba(255, 61, 0, 0.4),
        -25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    51% {  
        left: 100%; 
        transform: translateX(-100%); 
        box-shadow: 
        5px 0 0 -1px rgba(255, 61, 0, 0.9),
        10px 0 0 -2px rgba(255, 61, 0, 0.8),
        15px 0 0 -4px rgba(255, 61, 0, 0.6),
        20px 0 0 -6px rgba(255, 61, 0, 0.4),
        25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
    100% {  
        left: 0; 
        transform: translateX(0%); 
        box-shadow: 
        5px 0 0 -1px rgba(255, 61, 0, 0.9),
        10px 0 0 -2px rgba(255, 61, 0, 0.8),
        15px 0 0 -4px rgba(255, 61, 0, 0.6),
        20px 0 0 -6px rgba(255, 61, 0, 0.4),
        25px 0 0 -8px rgba(255, 61, 0, 0.2);
    }
  }  
  
</style>