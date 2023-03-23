
<template>
    <div>
        <!-- <ball-c :ball="inner" @play-ball="getChild"></ball-c> -->
        <ball-c :ball="referenceData" :val="val" @val="getfromGrandson" :way="getfromGrandson"></ball-c>
        <ball-t :data-object="dataObj" :data-method="addParentDatearr" @data="updateData"></ball-t>
        {{ JSON.stringify(dataObj.array) }}
   </div>
</template>

<script>
import BallC from './BallC.vue';
import BallT from './BallT.vue';

export default {
  components: { BallC ,BallT},
    name: 'BallP',
    comments: {
        BallC,
        BallT
    },
    data: function(){
        return {
            inner:0,
            referenceData: {
                name: 'wjx',
                age: 23
            },
            dataObj: {
                name: 'test',
                array: ['1']
            },
            val: 10000

        }
    },
    methods: {
        getfromGrandson(val) {
            // console.log('此数据来自c1组件',val)
            this.val = val
        },
        getChild(ball) {
            // console.log('子组件踢给我的',ball)
            this.inner = ball+1
        },
        addParentDatearr(param) {
            // 添加数据
            this.dataObj.array.push(param)
        },
        updateData(param) {
            // vue 官方的父子组件通信方式
            this.dataObj.array.push(param)
        }
    },
    // mounted() {
    //     setInterval(() => {
    //         console.log(this.referenceData)
    //     },3000)
    // }
}


</script>