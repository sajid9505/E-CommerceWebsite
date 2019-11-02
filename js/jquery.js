
// Redirecting to cartpage
$('.card-bag').click(function(){
    window.open("cart.html","_self")
})

// redirecting to home page from cartpage
$('.btn-continue').click(function(){
    window.open("index.html","_self")
})

// Inputting data into LocalStorage
$('.btn-full').click(function(){
    console.log("submit button clicked")
    var title = $('#InputName').val()
    var img = $('#InputImage').val()
    var price = $('#InputPrice').val()
    var description = $('#InputDescription').val()
    products.push({title:title,img:img,price:price,description:description})
    console.log(products)
    
    window.localStorage.setItem('products',JSON.stringify(products))
    window.open('index.html',"_self")
})


var products = JSON.parse(window.localStorage.getItem('products'))
 console.log(products)
 if(products == null)
 {
    var products = [
        {
        title:"Whatever",
        img:"img/intro/1.jpg",
        price:"200",
        description:"Something"
        }
     ]

     window.localStorage.setItem('products',JSON.stringify(products))
 }

 $.each(products,function(i,val){
    var insertproduct = $('<div class="intro-item"><figure><img src="" alt="..."></figure><div class="product-info"><h5></h5><p></p><a href="#" class="site-btn btn-line">ADD TO CART</a></div></div>')
    //console.log(insertproduct)
    insertproduct.children("figure").children("img").attr('src',products[i].img)
    insertproduct.children("div").children("h5").text(products[i].title)
    //insertproduct.children("div").children("p").text(localStorageproduct[i].description)
    insertproduct.children("div").children("p").text(products[i].price + "$")
    $('.intro-slider').append(insertproduct)
})

 