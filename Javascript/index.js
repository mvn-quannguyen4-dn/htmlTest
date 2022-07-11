async function ajax() {
    var ajax = document.getElementsByClassName("ajax");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://reqres.in/api/users?page=2", true);
    xhr.onload = await function(){
        let data = JSON.parse(this.responseText);
        data.data.forEach(item => {
            var card = document.createElement("div");
            card.setAttribute("class","item-card")
            var image = document.createElement("img");
            image.setAttribute("src",item.avatar);
            image.setAttribute("class","user-avatar");
            card.appendChild(image);
            var name = document.createElement("p");
            name.setAttribute("class","user-name");
            var textName = document.createTextNode(item.first_name+' '+item.last_name);
            name.appendChild(textName);
            card.appendChild(name);
            var email = document.createElement("p");
            var textEmail = document.createTextNode(item.email);
            email.setAttribute("class","user-email");
            email.appendChild(textEmail);
            card.appendChild(email);
            ajax[0].appendChild(card);
        })
    }   
    xhr.send();   
}

async function myFetch() {
    var fetchBoard = document.getElementsByClassName("fetch");
    await fetch('https://reqres.in/api/users?page=2')
    .then((response)=> response.json())
    .then((data) => {
        console.log(data)
        data.data.forEach(item => {
            var card = document.createElement("div");
            card.setAttribute("class","item-card")
            var image = document.createElement("img");
            image.setAttribute("src",item.avatar);
            image.setAttribute("class","user-avatar");
            card.appendChild(image);
            var name = document.createElement("p");
            name.setAttribute("class","user-name");
            var textName = document.createTextNode(item.first_name+' '+item.last_name);
            name.appendChild(textName);
            card.appendChild(name);
            var email = document.createElement("p");
            var textEmail = document.createTextNode(item.email);
            email.setAttribute("class","user-email");
            email.appendChild(textEmail);
            card.appendChild(email);
            fetchBoard[0].appendChild(card);
        })
    })
    .catch(error => {
        fetchBoard.innerHTML = "ERROR: "+error;
    });
}