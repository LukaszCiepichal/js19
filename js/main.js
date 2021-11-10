let div = document.getElementById("container");



document.querySelector("button").onclick = function() {
    let name = document.getElementById("imie").value;
    let surname = document.getElementById("nazwisko").value;
    let phone = document.getElementById("phone").value;
    

    let pName = document.getElementById("name");
    let pSurname = document.getElementById("surname");
    let pPhone = document.getElementById("telefon");
    
    pName.innerText = name;
    pSurname.innerText = surname;
    pPhone.innerText = phone;
    
}




