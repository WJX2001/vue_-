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