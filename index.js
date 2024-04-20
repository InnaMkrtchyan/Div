let divClick = document.getElementById("myDiv");

let i = 0;

divClick.onclick = function(){
    i++;
    if(i%2){
        divClick.style.border = "5px solid black";
    }else if (i==2){
        divClick.style.backgroundColor = "purple";
        divClick.style.border = "none";
    }else if (i == 4){
        divClick.style.backgroundColor = "green"
    }else if (i == 6){
        divClick.style.backgroundColor = "black"
    }else {
        divClick.style.opacity = "0"
    }
}