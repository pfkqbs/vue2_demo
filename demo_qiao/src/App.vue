<template>
<div>
 <!-- 使用子组件HelloWorld -->
  <HelloWorld msg="vue3_demo" />
  <hr />
  <h2>组件传值</h2>
  <my-child
    :mytitle="title"
    colorName="red"
    :size="size"
    @changeSize="handleSize"
  ></my-child>

  <hr />
  <h2>属性绑定的不同形式</h2>
  <my-child v-bind="{ mytitle: title, colorName: color }"></my-child>

  <hr />
  <h2>数据绑定</h2>
  <custrom-input v-model="msg"></custrom-input>
  <p>{{ msg }}</p>

  <hr />
  <h2>数据绑定(计算属性的方式)</h2>
  <component-custrom-input 
    v-model="msg"></component-custrom-input>
</div>
 

</template>

<script>
// 导入子组件
import HelloWorld from "./components/HelloWorld.vue";
import MyChild from "./components/Child.vue";
import CustromInput from "./components/CustromInput.vue";
import ComponentCustromInput from "./components/ComponentCustroInput.vue";

export default {
  name: "App",
  // 注册子组件
  components: {
    HelloWorld,
    MyChild,
    CustromInput,
    ComponentCustromInput
  },
  data() {
    return {
      title: "标题",
      color: "red",
      size: 12,
      msg: "",
    };
  },
  methods: {
    handleSize(size) {
      this.size += size;
    },
  },
};
</script>

<style>
</style>
