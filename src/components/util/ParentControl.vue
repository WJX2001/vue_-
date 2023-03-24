<template>
    <div>
        <div ref="nb">受控数字：{{ number }}</div>
        <div>子组件绑定了注入的字符串: {{ text.text }}</div>
        <div v-if="!showName" v-loading="!showName"></div>
        <div v-else>用户名：{{ user.info.name }}</div>
    </div>
    
</template>

<script>
import { EventBus,EventType } from './EventBus'
export default {
    name: "ParentControl",
    props:['refresh','user'],
    inject: ['text'],
    data: function() {
        return {
            number:0,
            showName:false
        }
    },
    watch: {
        refresh: function() {
            this.addOne()
        },
        watch: {
            handler: function (newValue){
                if(newValue?.info?.name) {
                    this.showName = true
                }
            },
            deep:true
        }
    },
    methods: {
        addOne() {
            this.number = this.number+1
        }
    },
    mounted() {
        EventBus.$on(EventType.DATA_TYPE, (msg) => {
            this.addOne()
            console.log(msg)
        })
        // console.log('this.injectVal',this.injectVal)
    }
    
}
</script>