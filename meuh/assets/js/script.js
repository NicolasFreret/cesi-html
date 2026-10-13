const string ="texte"
const number = 5
const tableau = []
const bolean = true
const object = {}


const array = [1,3,5,'tout'],
eleves = [
    {nom:'Durant', prenom:'Michel', notes:[10,11,18]},
    {nom:'Dulant', prenom:'Michelle', notes:[1,1,8]},
    {nom:'Doe', prenom:'Bob', notes:[10,10,12]}
];

console.log( eleves.map(eleve => eleve.nom) )

eleves.forEach( (eleve, i) => {
    //console.log(eleve.prenom+' '+(i + 1))
    const notes = eleve.notes

    const uu = notes.reduce((acc, note)=> note + acc, 0 )
    console.log(uu)

    let total = 0
    for (let index = 0; index < notes.length; index++) {
        total += notes[index]
    }

    const text = `${eleve.nom} a ${ (total / notes.length).toFixed(2)} de moyenne`

    console.log( text )    

});


saluer('Nicolas')


function saluer(_nom = 'beau gosse'){
    console.log(`Salut ${_nom}`)
}

const saluer2 = _nom => `Salut ${_nom}` 

const y = saluer2('Jean')
console.log(y)

const div = document.createElement('div'),
header = document.querySelector('header')

//console.log(header)
div.innerText = 'Coucou'
div.id = 'belette'
div.classList.add('superClass')
//header.append(div)


const a = document.createElement('a'),
nav = header.querySelector('nav')


//a.href = 'https://caen.cesi.fr/'
a.setAttribute('href', 'https://caen.cesi.fr/')
a.innerText = 'CESI'
a.target = '_blank'
nav.append(a)

const as = [...nav.querySelectorAll('a')]


console.log( !!(as.filter(a => a.innerText.toLocaleLowerCase().includes('e')).length))


as.forEach(a =>{
    a.classList.add('baptiste')
})


///////////////////SLIDER////////////////////////////

const slider = document.querySelector('.slider'),
track = slider.querySelector('.slider-track'),
slides = track.querySelectorAll('.slide'),
arrows = slider.querySelectorAll('.arrow')

let indexSlider = 0,
timeAutoplay = 5,
autoplay

function arrowsClick(e){
    const el = e.currentTarget
    el.classList.contains('left') ? indexSlider-- : indexSlider++
    if(autoplay) resetAutoplay(timeAutoplay)
    preventSliderOverflow(indexSlider)
    shiftSlide()
}

function preventSliderOverflow(_index){
    indexSlider = _index < 0 ? slides.length - 1 : 
        _index > slides.length - 1 ? 0 : 
        _index
}

function shiftSlide(){
    track.style.transform =`translateX(-${indexSlider * 100}%)`
}

function autoPlay(_timeInSec = 5){
   autoplay = setInterval(() => {
        indexSlider++
        preventSliderOverflow(indexSlider)
        shiftSlide()
    }, _timeInSec * 1000);
}

function resetAutoplay(_timeInSec = 5){
    clearInterval(autoplay)
    autoPlay(_timeInSec)
}
 autoPlay(timeAutoplay)





arrows.forEach(arrow =>{
    arrow.addEventListener('click', arrowsClick)
})



console.log(track)








