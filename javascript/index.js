function items(){
    if (localStorage.getItem("data") === null) {     
        init();
    }
    var board = document.getElementsByClassName("board");
    let data = JSON.parse(localStorage.getItem("data"));
    data.items.forEach((item,index) => {
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

        var action = document.createElement("div");
        action.setAttribute("class","action");

        var button = document.createElement("button");
        button.setAttribute("class","button")
        button.innerHTML = "Edit";
        button.onclick = function(){
            window.location = './edit.html?id='+item.id;
        }
        action.appendChild(button);

        var delButton = document.createElement("button");
        delButton.setAttribute("class","delete-button");
        delButton.innerHTML = "Delete";
        delButton.onclick = function(){ 
            var list = [];
            list = JSON.parse(localStorage.getItem("data"));
            list.items.splice(index,1);
            localStorage.setItem("data",JSON.stringify(list));
            window.location.reload();
        }
        action.appendChild(delButton);

        card.appendChild(action);
        board[0].appendChild(card);
    });
}

function search(){
    var board = document.getElementsByClassName("board");
    var empty = document.createElement("div");
    empty.setAttribute("class","board")
    board[0].parentNode.replaceChild(empty, board[0]);


    var key = document.getElementById("search").value;
    let products = JSON.parse(localStorage.getItem("data"));
    let data = [];
    products.items.forEach(item => {
        if(item.name.search(key)!==-1){
            data.push(item);
        }
    });
    console.log(data)

    data.forEach((item,index) => {
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

        var action = document.createElement("div");
        action.setAttribute("class","action");

        var button = document.createElement("button");
        button.setAttribute("class","button")
        button.innerHTML = "Edit";
        button.onclick = function(){
            window.location = './edit.html?id='+item.id;
        }
        action.appendChild(button);

        var delButton = document.createElement("button");
        delButton.setAttribute("class","delete-button")
        delButton.innerHTML = "Delete";
        delButton.onclick = function(){ 
            var list = [];
            list = JSON.parse(localStorage.getItem("data"));
            list.items.splice(index,1);
            localStorage.setItem("data",JSON.stringify(list));
            window.location.reload();
        }
        action.appendChild(delButton);

        card.appendChild(action);
        board[0].appendChild(card);
    });
}

function init(){
    localStorage.setItem("data",JSON.stringify(base));
}

const base={
    "index": 9,
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