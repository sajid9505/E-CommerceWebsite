var Product = require('./../models/product.model')

module.exports.new = function(request, response){
    //save(request.body)
    console.log(request.body)
    let product = new Product(request.body)
    product.save(function(err, data){
        if(err){
            // console.log(err)
            return response.status(400).json({msg: "All fields are required"})
        }
        return response.status(200).json({product:data})
    })
   // Products.push(request.body)
   // console.log(Products)
}

module.exports.home = function(request, response){
    //save(request.body)
    console.log(request.body)
    // let product = new Product(request.body)
    Product.find(function(err, data){
        if(err){
            // console.log(err)
            return response.status(400).json({msg: "something went wrong"})
        }
        return response.render('index.html', {products:data})
    })
   // Products.push(request.body)
   // console.log(Products)
}

module.exports.list = function(request, response){
    //save(request.body)
    // console.log(request.body)
    // let product = new Product(request.body)
    Product.find(function(err, data){
        if(err){
            // console.log(err)
            return response.status(400).json({msg: "something went wrong"})
        }
        return response.status(200).json({product:data})
    })
   // Products.push(request.body)
   // console.log(Products)
}