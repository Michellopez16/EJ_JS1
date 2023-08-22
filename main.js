const contenedor = document.getElementById("contenedor");
let btn1 = document.getElementById("btn1")


let a = 5;
console.log("hola mundo " + a);
a +=4
console.log("hola mundo " + a);

let op = true
function saludar(){
    if (op){
    btn1.innerHTML = "hola";
    btn1.style.backgroundColor = "rgba(255,0,0,.8)"
    }
    else{
        btn1.innerHTML = "Mundo";
        btn1.style.backgroundColor = "rgba(10,55,10,.8)"
    }
    op = !op;
}

btn1.addEventListener("click",saludar);

document.addEventListener("keydown",function(event){
    if (event.key == 'ArrowUp'){
        contenedor.innerHTML += "<h1>Hola Mundo</h1>"
    }
})


function suma(a,b){
    return a+b;
}


console.log(suma(5,6));

console.log(suma(7,9));

console.log(suma(9,5));