<template>
<!-- 表单vue3提供的双向数据绑定 -->
    <div>
        <input 
        type="text"
        v-model="myValue"
        >
    </div>
</template>

<script >
// 就可以在组件中直接使用v-model
export default{
    props:['modelValue'],
    emits:['update:modelValue'],
    computed:{
        myValue:{
            get(){
                return this.modelValue
            },
            set(val){
                this.$emit('update:modelValue',val)

            }
        }
    }
}

</script>

<style scoped>

</style>