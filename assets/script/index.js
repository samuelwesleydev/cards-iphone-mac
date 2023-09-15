const corCinza = document.querySelectorAll('.color-gray')
const corAmarelo = document.querySelectorAll('.color-yellow')
const corVermelho = document.querySelectorAll('.color-red')

const iphoneAmarelo = document.querySelector('.foto-iphone-amarelo')
const iphoneCinza = document.querySelector('.foto-iphone-cinza')

corCinza[0].addEventListener('click', ()=>{
    corCinza[0].classList.add('color-selected')
    corAmarelo[0].classList.remove('color-selected')
    corVermelho[0].classList.remove('color-selected')


})

corCinza[1].addEventListener('click', ()=>{
    corCinza[1].classList.add('color-selected')
    corAmarelo[1].classList.remove('color-selected')
    corVermelho[1].classList.remove('color-selected')
})

corAmarelo[0].addEventListener('click', ()=>{
    corAmarelo[0].classList.add('color-selected')
    corCinza[0].classList.remove('color-selected')
    corVermelho[0].classList.remove('color-selected')


})

corAmarelo[1].addEventListener('click', ()=>{
    corAmarelo[1].classList.add('color-selected')
    corCinza[1].classList.remove('color-selected')
    corVermelho[1].classList.remove('color-selected')
})

corVermelho[0].addEventListener('click', ()=>{
    corVermelho[0].classList.add('color-selected')
    corAmarelo[0].classList.remove('color-selected')
    corCinza[0].classList.remove('color-selected')
})
corVermelho[1].addEventListener('click', ()=>{
    corVermelho[1].classList.add('color-selected')
    corAmarelo[1].classList.remove('color-selected')
    corCinza[1].classList.remove('color-selected')
})


