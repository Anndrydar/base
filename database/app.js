const mongoose = require('mongoose');
const {Equipos} = require('./modelo');
const {Torneos} = require('./modelo');
const {Partidos} = require('./modelo');

//URL para la conexion de la base de datos con mongodb-atlas
const dbURL = "mongodb+srv://Anndry:4GrwJF2Pupp3Jxvq@cluster0.68hzr9g.mongodb.net/BDED";


(async ()=> {
try{
      //conectarse a la base de datos
    const stateConnection = await mongoose.connect(dbURL);
    console.log('$$$$ Conexion sastifactoria $$$$');

    //Creando los equipos
    const equipo1 =  new Equipos({nombre:"Liverpool", descripcion:"Ataque rapido",serie:"A"});
    const saveEquipo1 = await  equipo1.save();
    const equipo2 =  new Equipos({nombre:"Tottenham", descripcion:"Tenencia de balon",serie:"A"});
    const saveEquipo2 = await  equipo2.save();
    const equipo3 =  new Equipos({nombre:"Manchester City", descripcion:"Juego rapido",serie:"A"});
    const saveEquipo3 = await  equipo3.save();

    updateEquipos();

    //Creando los torneos
    const torneo1 =  new Torneos({descripcion:"Fa Cup"});
    const saveTorneo1 = await  torneo1.save();
    const torneo2 =  new Torneos({descripcion:"Community Shield"});
    const saveTorneo2 = await  torneo2.save();

    updateTorneos();

    //Creando los partidos
    const partido1=  new Partidos(
                {
                idTorneo:saveTorneo1._id,
                idEquipo1:saveEquipo1._id,
                idEquipo2: saveEquipo2._id,
                golesEquipo1: 0,
                golesEquipo2: 3,
                Observacion:"Partido con muchas interrupciones debido al mal albitraje"
                     }
                    );
    const savePartido = await partido1.save();

    const partido2=  new Partidos(
        {
        idTorneo:saveTorneo2._id,
        idEquipo1:saveEquipo1._id,
        idEquipo2: saveEquipo3._id,
        golesEquipo1: 4,
        golesEquipo2: 4,
        Observacion:"Partido con muchas emociones"
             }
            );
const savePartido2 = await partido2.save();

updatePartidos();

//Listar datos de la coleccion equipos
coleccionEquipos(Equipos).then((resultado)=>{
console.log('Coleccion equipos'); 
console.log('');    
console.log(resultado);
})

//Listar datos de la coleccion torneos
coleccionTorneos(Torneos).then((resultado)=>{
    console.log('Coleccion torneos');
    console.log('');  
    console.log(resultado);
})

//Listar datos de la coleccion partidos
coleccionPartidos(Partidos).then((resultado)=>{
    console.log('Coleccion partidos'); 
    console.log(resultado);
})



}catch(error){
    console.log(error.message);
}

})();

//Consultas de datos
//Buscar datos de la coleccion Equipos
const coleccionEquipos = (Equipos)=>{
return new Promise((res, rej)=>{
    for (var i=0; i<Equipos.length; i++){
        res(Equipos.find());
    }
    });
}

//Buscar datos de la coleccion Torneos
const coleccionTorneos = (Torneos)=>{
    return new Promise((res, rej)=>{
        var i = 0;
        while (i < Torneos.length) {
            i++;
            res(Torneos.find());
          }
        });
    }

//Buscar datos de la coleccion Partidos
const coleccionPartidos = (Partidos)=>{
    return new Promise((res, rej)=>{
    var i = 0;
    for (i in Partidos){
        res(Partidos.find());
        }
    });
        }   




//Edicion de datos
//Editar atributo coleccion equipos
const updateEquipos = async()=>{
    const respuesta = await Equipos.updateOne(
        {
            nombre: "Tottenham"
        },
        {
            nombre: "Editado(Chelsea)"
        }
    )
}

//Editar atributo coleccion torneos
const updateTorneos = async()=>{
    const respuesta = await Torneos.updateOne(
        {
            descripcion:"Community Shield"
        },
        {
            descripcion:"Editado(FA Premier League)"
        }
    )
}



//Editar atributo coleccion partidos
const updatePartidos = async()=>{
    const respuesta = await Partidos.updateOne(
        {
            Observacion:"Partido con muchas interrupciones debido al mal albitraje"
        },
        {
            Observacion:"Editado(Partido muy paralizado)"
        }
    )
}