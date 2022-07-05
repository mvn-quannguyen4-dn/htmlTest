function items(){
    var board = document.getElementsByClassName("board");
    data.items.forEach(item => {
        var card = document.createElement("div");
        card.setAttribute("class","item-card")
        var image = document.createElement("img");
        image.setAttribute("src",item.image);
        image.setAttribute("class","item-img");
        card.appendChild(image);
        var name = document.createElement("p");
        name.setAttribute("class","item-name");
        var textName = document.createTextNode(item.name);
        name.appendChild(textName);
        card.appendChild(name);
        var price = document.createElement("p");
        var textPrice = document.createTextNode("€"+item.price);
        price.setAttribute("class","item-price");
        price.appendChild(textPrice);
        card.appendChild(price);
        var button = document.createElement("button");
        button.setAttribute("class","button")
        button.innerHTML = "Add to Cart";
        button.onclick = function(){ 
            var cart = [];
            var valid = true;
            cart = JSON.parse(localStorage.getItem("cart"));
            if(!cart){
                cart=[];
            }
            cart.forEach(prod => {
                if(prod.id === item.id) {
                    valid = false;
                }
            })
            if(valid) cart.push(item);
            localStorage.setItem("cart",JSON.stringify(cart));
            window.location.reload();
        }
        card.appendChild(button);
        // button.addEventListener("click", addToCart(item.id));
        board[0].appendChild(card);
    });
}
function getOrder(){
    document.write(JSON.parse(localStorage.getItem("cart")).length);
}
function cart(){
    var list = document.getElementsByClassName("list");
    var table = document.createElement("table");
    table.setAttribute("class","list-order")
    var tableHead = table.createTHead();
    var row = tableHead.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML="<b>Index</b>"
    cell = row.insertCell(1)
    cell.innerHTML="<b>Infomation</b>"
    cell = row.insertCell(2)
    cell.innerHTML="<b>Price</b>"
    cell = row.insertCell(3)
    cell.innerHTML="<b>Delete</b>"
    var cart = [];
    cart = JSON.parse(localStorage.getItem("cart"));
    // if(!cart){
    //     cart=[];
    // }
    cart.forEach((prod,index) => {
        var body = table.createTBody();
        var dataRow = body.insertRow(0);
        var dataCell = dataRow.insertCell(0);
        dataCell.innerHTML = index+1;
        dataCell.setAttribute("class","product-index");

        dataCell = dataRow.insertCell(1);
        var image = document.createElement("img");
        image.setAttribute("src",prod.image);
        image.setAttribute("class","product-img");
        dataCell.appendChild(image);
        dataCell.setAttribute("class","info");
        var name = document.createElement("p");
        name.setAttribute("class","product-name");
        var textName = document.createTextNode(prod.name);
        name.appendChild(textName);
        dataCell.appendChild(name);

        dataCell = dataRow.insertCell(2);
        dataCell.innerHTML = "€"+prod.price;
        dataCell.setAttribute("class","product-price");

        dataCell = dataRow.insertCell(3);
        dataCell.setAttribute("class","action");
        var button = document.createElement("button");
        button.setAttribute("class","delete-button")
        button.innerHTML = "Delete";
        button.onclick = function(){ 
            var cart = [];
            var valid = true;
            cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cart));
            window.location.reload();
        }
        dataCell.appendChild(button);

        // dataCell.innerHTML = "<img scr="+prod.image+" alt='product-image'><p>"+prod.name+"</p>";
    })
    list[0].appendChild(table);
}

const data={
    "items":[
    {
        "id" : 1,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/2.jpg",
        "name" : "Lorem ipsum speaker",
        "price": 9.54,
        "originPrice":10.6
    },
    {
        "id" : 2,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/3.jpg",
        "name" : "Lorem ipsum camera",
        "price": 10,
        "originPrice":12.5
    },
    {
        
        "id" : 3,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/1.jpg",
        "name" : "Lorem ipsum blender",
        "price": 15.6,
        "originPrice": null
    },
    {
        
        "id" : 4,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/4.jpg",
        "name" : "Lorem ipsum monitor",
        "price": 10.15,
        "originPrice":14.5
    },
    {
        
        "id" : 5,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/5.jpg",
        "name" : "Lorem ipsum small speaker",
        "price": 2.25,
        "originPrice":2.5
    },
    {
        
        "id" : 6,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/6.jpg",
        "name" : "Lorem ipsum microphone",
        "price": 12.5,
        "originPrice": null
    },
    {
        "id" : 7,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/7.jpg",
        "name" : "Lorem ipsum grinder",
        "price": 18,
        "originPrice": 22.5
    },
    {
        "id" : 8,
        "image" : "https://flone.reactdemo.hasthemes.com/assets/img/product/electronics/8.jpg",
        "name" : "Lorem ipsum bluetooth",
        "price": 29.25,
        "originPrice": 32.5
    }
    ]
}