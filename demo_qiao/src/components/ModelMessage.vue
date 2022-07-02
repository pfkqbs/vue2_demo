<template>
<!--  v-model通信-->
    <div>
            <p>{{myKey}}--{{myValue}}</p>
            <button @click="handleClick">传递</button>
    </div>
</template>

<script >
export default{
    props:['myKey','myValue'],
    data(){
        return {

        }
    },
    methods: {
        handleClick(){
            this.$emit('update:mykey','age')
            this.$emit('update:myValue',28)
        }
        
    },
}
</script>

<style scoped>

</style>