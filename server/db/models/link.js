'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    postee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    URL: String,
    date: Date,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    up: Number,
    down: Number
});


schema.virtual('calculatedScore').get(function(){
    return this.up - this.down;
})

mongoose.model('Link', schema);