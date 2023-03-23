<template>
    <div>
        <el-input v-model="arrItem"></el-input>
        <el-button @click="sendData">向父组件添加数据</el-button>
    </div>
</template>

<script>

    export default{
        name: 'BallT',
        props: ['dataObject','dataMethod'],
        data: function() {
            return {
                arrItem:''
            }
        },
        methods: {
            sendData() {
                // 方法一 react 当中父子组件通信方式
                this.dataMethod(this.arrItem)

                // 方法二 直接发送事件 
                this.$emit('data',this.arrItem)
            }
        }
    }
</script>