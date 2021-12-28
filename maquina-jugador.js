// Juego mejorado de piedra papel y tijera aleatorio.

let piedra = 'piedra';
let papel = 'papel';
let tijera = 'tijera';

let aleatorioMaquina = Math.round(Math.random()*2);
let aleatorioJugador = Math.round(Math.random()*2);

// Funcion que tranforma de número a palabra el aleatorio
let jugarMaquina = function(){
    // console.log(`Jugada ${aleatorioMaquina}`);
    if(aleatorioMaquina === 0){
        aleatorioMaquina = 'piedra';
    // console.log(aleatorioMaquina);
}
else if(aleatorioMaquina === 1){
    aleatorioMaquina = 'papel'
    // console.log(aleatorioMaquina);
}
else if( aleatorioMaquina === 2){
    aleatorioMaquina = 'tijera'
    // console.log(aleatorioMaquina);
}
}
jugarMaquina();
console.log(`Máquina juega ${aleatorioMaquina}`);

let jugarJugador = function(){
    // console.log(`Jugada ${aleatorioJugador}`);
    if(aleatorioJugador === 0){
        aleatorioJugador = 'piedra';
    // console.log(aleatorioJugador);
}
else if(aleatorioJugador === 1){
    aleatorioJugador = 'papel'
    // console.log(aleatorioJugador);
}
else if( aleatorioJugador === 2){
    aleatorioJugador = 'tijera'
    // console.log(aleatorioJugador);
}
}

jugarJugador();

console.log(`Jugador juega ${aleatorioJugador}`);

let jugarPiedraPapelTijera = function(){
if(aleatorioMaquina === piedra && aleatorioJugador === piedra){
    console.log(`Empate a seguir Jugando!!!`);
}else if(aleatorioMaquina === piedra && aleatorioJugador === papel){
    console.log(`Gana JUGADOR`);
}else if(aleatorioMaquina === piedra && aleatorioJugador === tijera){
    console.log(`Gana MAQUINA`);
}else if(aleatorioMaquina === papel && aleatorioJugador === piedra){
    console.log(`Gana MAQUINA`);
}else if(aleatorioMaquina === papel && aleatorioJugador === papel){
    console.log(`Empate a seguir Jugando!!!`);
}else if(aleatorioMaquina === papel && aleatorioJugador === tijera){
    console.log(`Gana JUGADOR`);
}else if(aleatorioMaquina === tijera && aleatorioJugador === piedra){
    console.log(`Gana JUGADOR`);
}else if(aleatorioMaquina === tijera && aleatorioJugador === papel){
    console.log(`Gana MAQUINA`);
}else if(aleatorioMaquina === tijera && aleatorioJugador === tijera){
    console.log(`Empate a seguir Jugando!!!`);
}
}

jugarPiedraPapelTijera();