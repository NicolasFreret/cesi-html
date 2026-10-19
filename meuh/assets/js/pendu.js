( async ()=>{

    let mot = false, 
    error = false


    try{
        let res = await fetch('https://trouve-mot.fr/api/random')
        if(res.status != 200){
            error = res.status
        }
        res = await res.json()
        mot = res[0]?.name ?? false
    }catch(e){
        error = e
    }

    if(error && !mot){
        console.error(error)
         return
    }

    

//     const eleves = [
//   {
//     nom: "Dupont",
//     prenom: "Alice",
//     promo: "Bachelor 2026",
//     notes: {
//       Mathematiques: 15.5,
//       Informatique: 17.0,
//       Anglais: 14.0
//     }
//   },
//   {
//     nom: "Martin",
//     prenom: "Lucas",
//     promo: "Bachelor 2026",
//     notes: {
//       Mathematiques: 12.0,
//       Informatique: 14.5,
//       Anglais: 16.0
//     }
//   },{
//     nom: "Bernard",
//     prenom: "Chloé",
//     promo: "Master 2027",
//     notes: {
//       Mathematiques: 18.0,
//       Informatique: 19.0,
//       Anglais: 17.5
//     }
//   },
//     {
//     nom: "Bernard",
//     prenom: "Théo",
//     promo: "Master 2027",
//     notes: {
//       Mathematiques: 15.0,
//       Informatique: 11.0,
//       Anglais: 11.5
//     }
//   }
  
// ];

// const filter = eleves.filter(eleve =>{
//   return eleve.nom === "Bernard" && eleve.promo === "Master 2027"
// })

// const find = eleves.find(eleve =>{
//   return eleve.nom === "Martin"
// })

// const findIndex = eleves.findIndex(eleve =>{
//   return eleve.nom === "Martin"
// })

// const map = eleves.map(eleve => eleve.promo )


// console.log(eleves, filter, find, findIndex)
// console.log(new Set(map))

// const set = new Set([1,2,2,3])
// set.add(10)
// console.log([...set].filter(l=> l === 2))


})()