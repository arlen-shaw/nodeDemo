'use strict';
const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('test', (params, demo) => {
  console.log(demo);
  setTimeout(() => {
    console.log(params);
  }, 10000);
});

module.exports = function(params) {
  eventEmitter.emit('test', params, '22');
  console.log('1');
  return '1';
};

function Universe2() {
  if (typeof Universe2.instance === 'object') {
    return Universe2.instance;
  }

  this.startTime = 0;

  Universe2.instance = this;

  // 隐式返回
  // return this;
}

function Universe() {
  var instance;
  Universe = function Universe() {
    return instance;
  };

  Universe.prototype = this;

  instance = new Universe();

  instance.startTime = 0;

  return instance;
}
