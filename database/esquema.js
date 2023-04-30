const mongoose = require("mongoose");

//Estructura de la entidad equipo
const  EquipoSchema = new mongoose.Schema(

     {
       nombre:{
             type: String
       },
       descripcion:{
             type: String
       },
       serie:{
             type:String
       }
     },
     {
      versionKey: false
     }

);


//Estructura de la entidad torneo
const  TorneoSchema = new mongoose.Schema(

    {   
      descripcion:{
            type: String
      }
    },
    {
      versionKey: false
     }

);



//Estructura de la entidad partido
const  PartidoSchema = new mongoose.Schema(

    {
      idTorneo:{
            type: mongoose.Types.ObjectId,
            ref: "TorneoSchema"
      },
      idEquipo1:{
            type: mongoose.Types.ObjectId,
            ref: "EquipoSchema"
      },
      idEquipo2:{
            type:mongoose.Types.ObjectId,
            ref: "EquipoSchema"
      },
      golesEquipo1:{
            type: Number
      },
      golesEquipo2:{
            type: Number
      },
      Observacion:{
            type: String
      }
    },
    {
      versionKey: false
     }

);


module.exports = {
    EquipoSchema,
    TorneoSchema,
    PartidoSchema
   }
