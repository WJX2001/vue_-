import mitt from 'mitt'
const EventBus = new mitt();

const EventType = {
    DATA_TYPE: 'DATA_TYPE'
}

// $on  监听
// $emit 发送
export {
    EventBus,EventType
}