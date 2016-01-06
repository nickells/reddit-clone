'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    postee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
    up: Number,
    down: Number
});

schema.virtual('calculatedScore').get(function(){
    return this.up - this.down;
})

mongoose.model('Comment', schema);