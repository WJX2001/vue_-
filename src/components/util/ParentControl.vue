<template>
    <div ref="nb">受控数字：{{ number }}</div>
</template>

<script>
import { EventBus,EventType } from './EventBus'
export default {
    name: "ParentControl",
    props:['refresh'],
    data: function() {
        return {
            number:0
        }
    },
    watch: {
        refresh: function() {
            this.addOne()
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
        
    }
    
}
</script>