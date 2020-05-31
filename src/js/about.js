const prev = document.getElementById('prev')
const next = document.getElementById('next')

const images = Array.from(document.querySelectorAll('.about__img'))
const texts = Array.from(document.querySelectorAll('.about__text'))

let cont = 0

//le asigna la clase 'show' a la imagen y al texto seleccionado
const setClass = (direction) =>{
    images.map(image => image.classList.remove('show'))
    texts.map(text => text.classList.remove('show'))
    setCont(direction)
    images[cont].classList.add('show')
    texts[cont].classList.add('show')
}

//permite navegar entre las imagenes y texto
const setCont = (direction) =>{
    if(direction=='prev'){
        cont == 0? cont = images.length - 1 : cont --
    }
    else{
        cont == images.length - 1? cont = 0 : cont++
    }
}

//cuando se hace click sobre los controles
if(prev) prev.addEventListener('click', ()=>setClass('prev'))
if(next)next.addEventListener('click', ()=>setClass('next'))
