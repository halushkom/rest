const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, received: true},
    links: {type: Types.ObjectId}
})

module.exports= model('reservation', schema)