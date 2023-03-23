<template>
    <div>这是爷爷给我的财产 {{ val }} <el-button @click="send">花钱按钮</el-button></div>
</template>

<script>
    export default {
        name: 'BallC1',
        props:['val','way'],
        methods: {
            send() {
                // this.$emit('val',this.val - 1)
                // 通过函数方法进行透传
                this.way(this.val-1)
            }
        }
    }
</script>