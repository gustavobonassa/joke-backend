const { Schema, model } = require('mongoose');
const random = require('mongoose-random');
const mongoosePaginate = require('mongoose-paginate')

const JokeSchema = new Schema({
    joke: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {
        timestamps: true
    });
JokeSchema.plugin(random, { path: 'r' });
JokeSchema.plugin(mongoosePaginate);

module.exports = model('Joke', JokeSchema);