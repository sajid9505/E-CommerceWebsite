module.exports = function(app){
    var ProductController = require('./../controllers/product.controller')
    
    // app.get('/new', ProductController.form)
    // app.post('/new_product', ProductController.new)
    app.get('/', ProductController.home)
    // app.get('/products', ProductController.list)
    
}