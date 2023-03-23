<template>
    <div>这是爷爷给我的财产 {{ val }} <el-button @click="send">花钱按钮</el-button></div>
</template>

<script>
    export default {
        name: 'BallC1',
        props:['val'],
        methods: {
            send() {
                this.$emit('val',this.val - 1)
            }
        }
    }
</script>