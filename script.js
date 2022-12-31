


let menu = document.querySelector(".mobile-imagem");
let mobile=document.querySelector(".mobile");

menu.addEventListener("click",function(event){
event.preventDefault();
mobile.classList.toggle("display");
mobile.classList.add("transicao")

if(mobile.classList.contains('display')){
    document.querySelector(".mobile-imagem").src="imagem/close.png"
}
else{
   
  document.querySelector(".mobile-imagem").src="imagem/menu-mobile.png"
    
}

})