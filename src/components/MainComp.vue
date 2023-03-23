<template>
    <div>
        <el-card class="box-card">
            <div slot="header">
                <el-button @click="fresh">控制子组件</el-button>
            </div>
            <parent-control ref="child" :refresh = "refresh"></parent-control>
        </el-card>
    </div>
</template>

<script>
import ParentControl from './util/ParentControl.vue';
import { EventBus,EventType } from './util/EventBus';
export default {
  components: { ParentControl },
    name: 'MainComp',
    comments:[ParentControl],
    data: function(){
        return {
            refresh: false
        }
    },
    methods: {
        fresh() {

            // 方法一
            // this.refresh = !this.refresh

            // 方法二
            // this.$refs.child.addOne()
            // console.log(this.$refs.child.number)

            // 方法三
            EventBus.$emit(EventType.DATA_TYPE,'童叟无欺')

            
        }
    },
    
}
</script>