<template>
    <div>
            <button @click="handleSend">发消息</button>
    </div>
</template>

<script >
import mitt from '../utils/mitt.js'
export default{
    methods: {
        handleSend(){
            mitt.emit('sendMsg','我是mittA的值')
        }
    }
}
</script>

<style >

</style>