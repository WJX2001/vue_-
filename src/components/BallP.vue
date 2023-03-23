
<template>
    <div>
        <ball-c :ball="inner" @play-ball="getChild"></ball-c>
    </div>
</template>

<script>
import BallC from './BallC.vue';

export default {
  components: { BallC },
    name: 'BallP',
    comments: {
        BallC
    },
    data: function(){
        return {
            inner:0
        }
    },
    methods: {
        getChild(ball) {
            console.log('子组件踢给我的',ball)
            this.inner = ball+1
        }
    }
}


</script>