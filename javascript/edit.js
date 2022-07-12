const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
function init(){
    let products = JSON.parse(localStorage.getItem("data"));
    let product;
    products.items.forEach(item => {
        if(item.id == id){
            product=item;
        }
    });
    let prodName = document.getElementById("name");
    let prodPrice= document.getElementById("price");
    let prodImg = document.getElementById("image");
    prodImg.value = product.image;
    prodName.value = product.name;
    prodPrice.value = product.price;
}

function editProduct(){
    let prodName = document.getElementById("name");
    let prodPrice= document.getElementById("price");
    let prodImg = document.getElementById("image");
    if(prodName.value && prodPrice.value && prodImg.value){
        let data = JSON.parse(localStorage.getItem("data"));
        let items = data.items;
        let newProd = {
            "id" : parseInt(id),
            "image" : prodImg.value,
            "name" : prodName.value,
            "price": prodPrice.value,
            "originPrice":10.6
        }
        items.forEach((item,index) => {
            if (item.id == id) items[index] = newProd;
        });
        data.items = items;
        localStorage.setItem("data",JSON.stringify(data));
        window.location = './index.html';
    }
}