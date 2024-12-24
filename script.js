const closeicon = document.querySelector('.close-icon')
const navcontent = document.querySelector('.nav-content')
const hambergerMenu = document.querySelector('.hamberger-menu')
const header = document.querySelector('header')


hambergerMenu.addEventListener('click',(e)=>{
    e.stopPropagation()
    navcontent.style.display = "flex";
})

header.addEventListener('click',(e)=>{
    e.stopPropagation()
   
})

closeicon.addEventListener('click',()=>{
    navcontent.style.display = "none";
})



