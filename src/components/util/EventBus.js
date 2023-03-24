import Vue from "vue";
const EventBus = new Vue();

const EventType = {
    DATA_TYPE: 'DATA_TYPE'
}


// $on  监听
// $emit 发送
export {
    EventBus,EventType
}

/** 
 * 如果是vue3 需要引入mitt包即可
import mitt from 'mitt'
const MittBus = mitt();

const MittType = {
    DATA_TYPE: 'DATA_TYPE'
}
// $on
// $emit
export {
    MittBus, MittType
}
*/
