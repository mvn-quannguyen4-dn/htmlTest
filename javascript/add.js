function addProduct(){
    let prodName = document.getElementById("name");
    let prodPrice= document.getElementById("price");
    let prodImg = document.getElementById("image");
    if(prodName.value && prodPrice.value && prodImg.value){
        let data = JSON.parse(localStorage.getItem("data"));
        let items = data.items;
        let newProd = {
            "id" : data.index,
            "image" : prodImg.value,
            "name" : prodName.value,
            "price": prodPrice.value,
            "originPrice":10.6
        }
        items.push(newProd);
        data.index++;
        data.items = items;
        localStorage.setItem("data",JSON.stringify(data));
        window.location = './index.html';
    }
}