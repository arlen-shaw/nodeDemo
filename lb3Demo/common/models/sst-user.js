'use strict';

const aa = require('./../../server/boot/sing');
const bb = require('./../../server/boot/test');

module.exports = function(Sstuser) {
    Sstuser.getTest = async function(params){
        await bb(params);
        return await aa(params);
    }
    Sstuser.remoteMethod('getTest', {
        http: {verb: 'post', path: '/getTest'},
        accepts: {arg: 'params', type: 'string', http: {source: 'form'}},
        returns: {arg: 'response', type: 'string'},
    });
};
