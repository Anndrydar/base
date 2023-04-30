const mongoose = require("mongoose");
const esquema = require('./esquema');


//Creando modelo equipos
const Equipos = new mongoose.model('equipos', esquema.EquipoSchema);
//Creando modelo torneos
const Torneos = new mongoose.model('torneos',esquema.TorneoSchema);
//Creando modelo partidos
const Partidos = new mongoose.model('partidos', esquema.PartidoSchema);

module.exports = {
Equipos,
Torneos,
Partidos
}