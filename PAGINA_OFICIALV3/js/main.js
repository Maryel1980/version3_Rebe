const mainNav=document.getElementById('main-nav');
const toggleMenu=document.getElementById('toggle-menu');
const mainMenu=document.getElementById('main-menu');

const abrir= document.querySelector("#ventana1");
const img1=document.querySelector("#ventana1-1");

const fullboximg=document.getElementById("full-img-box");
const fullImg=document.getElementById("fullimg");

toggleMenu.addEventListener('click', ()=>{
    mainNav.classList.toggle('nav--show')
    mainMenu.classList.toggle('main-menu--show')
})

window.addEventListener('resize', ()=>{
    if(mainNav.classList.contains('nav--show')){
        mainNav.classList.remove('nav--show');
        mainMenu.classList.remove('main-menu--show')
    }
})
//opc1
function abrirVentana(){
    window.open("images/galeria/galeria1.jpeg", "_blank", "width= 400" )
}
//opc2
abrir.addEventListener("click", ()=>{
    img1.showModal();
})

//opc3
function closeImg(){
    fullboximg.style.display="none"
}

function openFullImg(reference){
    fullboximg.style.display = "flex";
    fullImg.src = reference
}
function closeImg(){
    fullboximg.style.display = "none";
}
