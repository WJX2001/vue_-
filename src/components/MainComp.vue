<template>
    <div>
        <el-card class="box-card">
            <div slot="header">
                <el-button @click="fresh">控制子组件</el-button>
            </div>
            <parent-control ref="child" :refresh = "refresh" :user="user"></parent-control>
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
    provide: function() {
        return {
            text: this.msg
        }
    },
    
    data: function(){
        return {
            refresh: false,
            msg:{
                text: 'hahahah'
            },
            user: {}
            
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
    mounted() {
        setTimeout(() => {
            // 变更对象里的值
            this.msg.text = '我变了'
            
            // 异步加载
            this.$set(this.user,'info',{name:'大象'})
        }, 3000);
    }
    
}
</script>