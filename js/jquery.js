
// Redirecting to cartpage
$('.card-bag').click(function(){
    window.open("cart.html","_self")
})

// redirecting to home page from cartpage
$('.btn-continue').click(function(){
    window.open("index.html","_self")
})

//cart number
cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
var cart_item_length
if(cart_items != null){
    cart_item_length = cart_items.length
}
else{
    cart_item_length = 0
}
$('.card-bag').children("span").text(cart_item_length)


// Inputting data into LocalStorage
$('.btn-full').click(function(){
    console.log("submit button clicked")
    var title = $('#InputName').val()
    var img = $('#InputImage').val()
    var price = $('#InputPrice').val()
    var quantity = $('#Quantity').val()
    var description = $('#InputDescription').val()
    products.push({title:title,img:img,price:price,quantity:quantity,description:description})
    console.log(products)
    
    window.localStorage.setItem('products',JSON.stringify(products))
    window.open('index.html',"_self")
})

//inputting default values
var products = JSON.parse(window.localStorage.getItem('products'))
 console.log(products)
 if(products == null)
 {
    var products = [
        {
        title:"Whatever",
        img:"img/intro/1.jpg",
        price:"200",
        quantity: "10",
        description:"Something"
        }
     ]

     window.localStorage.setItem('products',JSON.stringify(products))
 }

 //viewingproducts needs help pls
 $.each(products,function(i,val){
    var insertproduct = $('<ul class="slidee"><li><div class="intro-item"><figure><img src="" alt="..."><div class="product-info"><h5></h5><p></p><a href="#" class="site-btn btn-line cartnumber">ADD TO CART</a></div></div></figure><li></ul>')
    insertproduct.children("li").children("div").children("figure").children("img").attr('src',products[i].img)
    insertproduct.children("li").children("div").children("figure").children("div").children("h5").text(products[i].title)
    insertproduct.children("li").children("div").children("figure").children("div").children("p").text(products[i].price + "$")
    $('.intro-slider').append(insertproduct)
})

//taking cartnumbers
var cart_items = []
$('.cartnumber').click(function(){
   var cart_item = []
   cart_item = $(this).parent().parent().children("h5").text()
   
   cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
   if(cart_items == null){
       cart_items = [cart_item]
   }
   else{
       cart_items.push(cart_item)
   }
   
   window.localStorage.setItem('cart_items',JSON.stringify(cart_items))
   location.reload(true)
})