<template>
    <div>
  MittB
    </div>
</template>

<script setup>
import mitt from '../utils/mitt.js'
export default{
    mounted() {
        // 相当于一个观察者，谁发消息了，这里可以拿到
        mitt.on('sendMsg',(val)=>{
            console.log(val);
        })
        

        
    },
}
</script>

<style >

</style>