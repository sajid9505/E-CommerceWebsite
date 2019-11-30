var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema(
    {
       name: {
           type: String,
           required: "Title is required"
       },
       price: {
           type: String,
           required: "Price is required"
       },
       quantity: {
        type: Number,
        required: "Quantity is required"
    },
        description: {
            type: String,
            required: "Description is required"
        },
        image: {
            type: String,
            required: "Image is required"
        },
    }
)

var Product = mongoose.model('Product', ProductSchema)

module.exports = Product