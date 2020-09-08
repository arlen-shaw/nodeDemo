const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('test', (params, demo) => {
    console.log(demo);
    setTimeout(() => {
        console.log(params);
    }, 10000)
});

module.exports = function (params){
    eventEmitter.emit('test', params, "22");
    console.log('1');
    return '1';

}