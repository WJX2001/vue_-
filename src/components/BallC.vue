
<template>
    <div>
        <BallC1 :val="val" @val="send"></BallC1>
        
    </div>
    
</template>
<script>
import BallC1 from './BallC1.vue'

export default {
    name: 'BallC',
    components: {
        BallC1
    },
    props:['ball','val'],

    methods: {
        send(val) {
            this.$emit('val',val)
        }
    },
    mounted() {
        this.ball.name = 'hello'
        // console.log(this.ball)
        
        // // 起点
        // this.$emit('play-ball',this.ball +1)
    },
    // watch: {
    //     ball: function(newValue){

    //         // 减速
    //         console.log('父组件踢给我的',newValue)
    //         console.log('BallC减速一下,3秒后再次踢球')
            
    //         setTimeout(() => {
    //             this.$emit('play-ball',newValue +1)
    //         },3000)
            
    //     }
    // }
}

</script>