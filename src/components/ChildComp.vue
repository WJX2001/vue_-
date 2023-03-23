<template>
  <div>
    <!-- <el-input v-model="message"></el-input>
    <el-input v-model="name"></el-input> -->
    <div>这是反转之后的值{{ reverseMsg }}</div>
    <!-- 如果info 为空，就展示当前父组件没有传递数据，不为空，正常展示-->
    <div>{{ info || '当前父组件没有传数据给我'}}</div>
    <!-- <div v-if="info">{{ info }}</div>
    <div v-else>父组件当前没有给我传数据</div> -->

    <!-- <div>{{ wrapperInfo }}</div> -->
    <el-input v-model="localCompute"></el-input>
    <div>需要发送给父级的数据<el-input v-model="localInfo"></el-input></div>
    <el-button @click="monitor">查看值</el-button>
  </div>
</template>

<script>
export default {
  name: "ChildComp",
  props: {
    info:String,
  },

  // 生命周期函数
  // 1.组件实例被创建之初
  beforeCreate() {
    console.log("beforeCreate");
  },
  // 2.组件实例已经完全创建
  created() {},
  // 3.组件挂载之前
  beforeMount() {},
  // 4.组件挂载到实例上之后
  mounted() {
    window.addEventListener("click", this.handleEvent);
  },
  // 5.组件数据发生变化，更新之前
  beforeUpdate() {},
  // 6.组件数据更新之后
  updated() {},
  // 7.组件实例销毁之前
  beforeDestroy() {},

  // 8.组件实例销毁之后
  destroyed() {
    // 取消事件订阅
    console.log("destroyed");
    window.removeEventListener("click", this.handleEvent);
  },

  data: function () {
    return {
      message: "",
      name: '',
      localInfo:'',
      localComputeRealValue: ''
    };
  },

  methods: {
    handleEvent() {
      console.log("hahaha");
    },
    monitor() {
      // 传递给父级
      this.$emit('send-data',this.localInfo)
      
    }
  },

  // 计算属性
  computed: {
    reverseMsg: function () {
      return this.message.split("").reverse().join("");
    },
    wrapperInfo: function() {
      this.info? this.info: '当前父组件没有给我传值'
    },
    // 做一个数据代理 ,通过事件模式+computed的set/get,直接修改和读取父级的数据
    localCompute: {
      get: function() {
        return this.info
      },
      set: function(v) {
        this.$emit('update-info',v)
      }
    }
  },

  watch: {
    name: function(newValue,oldValue){
        console.log(newValue,oldValue)
    },
    message: {
        handler: function(newValue,oldValue){
            console.log(newValue,oldValue)
        },
        immediate:true
    },
    info: {
            handler: function (newValue, oldValue) {
                console.log('info', newValue, oldValue)
                this.localInfo = newValue
            },
            immediate: true
        }
  
    
  }
};
</script>

<style lang="scss" scoped></style>