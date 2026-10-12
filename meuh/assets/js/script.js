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



// for (let i = 0; i < eleves.length; i++) {
//     console.log(eleves[i].prenom)
// }

// let ii = 0
// while (ii < eleves.length) {
//     console.log(eleves[ii].prenom)
//     ii++
// }



saluer('Nicolas')


function saluer(_nom = 'beau gosse'){
    console.log(`Salut ${_nom}`)
}

const saluer2 = _nom => `Salut ${_nom}` 

const y = saluer2('Jean')
console.log(y)





