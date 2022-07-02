<template>
    <div>
        <p :style="{ fontSize:size + 'px'}">{{mytitle}}--{{colorName}}</p>
        <el-button type="primary" @click='$emit("handleSize",1)'>改变字体大小</el-button>

    </div>
</template>

<script >
export default {
    name:"my-child",
    // props:['mytitle','colorName']
    props:{
        mytitle:{
            type:String
        },
        colorName:{
            type:String,
            default: ()=>'black'
        },
        size:{
            type:Number,
            default: ()=>12
        },
    }
}
</script>

<style  scoped>

</style>