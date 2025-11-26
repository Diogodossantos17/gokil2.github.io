
var semana = new Date()
var week = semana.getDay()
var time = new Date()
var  hora = time.getHours()
var dia = new Date()
var day = dia.getDay()

switch(week, day){
 
    case 0:
        console.log(`Hoje são ${day} e ${hora} horas Domingo`)
    break
        case 1:
            console.log(`Hoje são ${day} e ${hora} horas, Segunda Feira`)
    break
        case 2: 
            console.log(`Hoje são ${day} e  ${hora} horas, Terça Feira`)
    break
        case 3:
            console.log(`Hoje são ${day} e ${hora} horas, Quarta Feira`)
    break
        case 4:
            console.log(`Hoje são ${day} e ${hora} horas, Quinta feira`)
    break
        case 5:
            console.log(`Hoje são ${day} e ${hora} horas, Sábado`)
    break
}


function idade(DataA, DataN){

    return DataA - DataN
}

let sexo = 'Femenino'

let age = (idade(2025, 1999))

console.log(`Idade de ${age} anos!`)

if (age >= 18 && sexo == 'Masculino'){

    console.log(`maior de idade, pode exercer o direito de voto`)
} else{

    console.log(`Menor de idade, e ainda por cima, é mulher está isento de votar.`)
}