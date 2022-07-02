<template>
<!-- 表单vue3提供的双向数据绑定 -->
    <div>
        <input 
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue',$event.target.value)">
    </div>
</template>

<script >
// 就可以在组件中直接使用v-model
export default{
    props:['modelValue'],
    emits:['update:modelValue']
}

</script>

<style scoped>

</style>