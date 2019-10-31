
// Redirecting to cartpage
$('.card-bag').click(function(){
    window.open("cart.html","_self")
})

// redirecting to home page from cartpage
$('.btn-continue').click(function(){
    window.open("index.html","_self")
})

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
    // var products = [
    //     {
    //     title:"Mother Board",
    //     img:"images/motherboard.jpg",
    //     price:"200",
    //     description:"Intel Z390 GAMING Motherboard with 10+2 Digital PWM Design, 2-Way CrossFire™ Multi-Graphics, USB 3.1 Gen2 Type-A, M.2 Thermal Guard, Intel GbE LAN with cFosSpeed, Smart Fan 5, Dual M.2, Dual Armor with Ultra Durable™ Technology, DualBIOS, CEC 2019"
    //     }
    //  ]

    var products = [
        {
        title:"Whatever",
        img:"img/products/1.jpg",
        price:"200",
        description:"Something"
        }
     ]

     window.localStorage.setItem('products',JSON.stringify(products))
 }

 