function changeColor(){
    var Welcome = document.getElementById("welcome_messege");
    if(Welcome.style.color === "red"){
        Welcome.style.color = "aqua";
    }
    else{
        Welcome.style.color = "red";
    }
}

function ChangeBackColor(){
    document.getElementById("body").style.backgroundColor = document.getElementById("BackColor").value;
    event.preventDefault();
}

