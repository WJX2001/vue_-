
<template>
    <div></div>
</template>
<script>
export default {
    name: 'BallC',
    props:['ball'],
    mounted() {
        // 起点
        this.$emit('play-ball',this.ball +1)
    },
    watch: {
        ball: function(newValue){

            // 减速
            console.log('父组件踢给我的',newValue)
            console.log('BallC减速一下,3秒后再次踢球')
            
            setTimeout(() => {
                this.$emit('play-ball',newValue +1)
            },3000)
            
        }
    }
}

</script>