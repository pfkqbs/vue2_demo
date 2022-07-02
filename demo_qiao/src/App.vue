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

  <hr />
  <h2>ref挂载到组件</h2>
  <expose-ref ref="fromRef"></expose-ref>
  <button @click="handelNext">下一步</button>
  <p ref="refP">ref绑在标签节点元素上，获取节点元素</p>

  <hr />
  <h2>model通信</h2>
  <model-message 
  v-model:myKey="myKey"
  v-model:myValue="myValue"
  ></model-message>

  <hr />
  <h2>平行组件通信</h2>
  <mitt-a></mitt-a>
  <mitt-b></mitt-b>
</div>
 

</template>

<script>
// 导入子组件
import HelloWorld from "./components/HelloWorld.vue";
import MyChild from "./components/Child.vue";
import CustromInput from "./components/CustromInput.vue";
import ComponentCustromInput from "./components/ComponentCustroInput.vue";
import ExposeRef from "./components/ExposeRef.vue";
import ModelMessage from './components/ModelMessage.vue';
import MittA from './components/MittA.vue';
import MittB from './components/MittB.vue';

export default {
  name: "App",
  // 注册子组件
  components: {
    HelloWorld,
    MyChild,
    CustromInput,
    ComponentCustromInput,
    ExposeRef,
    ModelMessage,
    MittA,
    MittB
    
  },
  data() {
    return {
      title: "标题",
      color: "red",
      size: 12,
      msg: "",
      myKey: "姓名",
      myValue: "张三",
    };
  },
  methods: {
    handleSize(size) {
      this.size += size;
    },
    handelNext(){
      // console.log(this.$refs.fromRef);
      this.$refs.fromRef.someMethods()
      console.log(this.$refs.refP);
    }
  },
  provide(){
    return{
      myInject:this.title + 'inject'

    }
  }
};
</script>

<style>
</style>
