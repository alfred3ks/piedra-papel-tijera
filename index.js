// Juego piedra papel o tijera


let piedra = 0;
let papel = 1;
let tijera = 2;

let maq = Math.round(Math.random()*2); // definimos aleatoriamente que la maquina nos de un numero de 0 a 3

let jugador = Math.round(Math.random()*2);

console.log(`Máquina -> ${maq}`);
console.log(`Jugador -> ${jugador}`);

function jugar() {

if(maq === piedra && jugador === piedra) {
    console.log("pc:piedra / jugador:piedra Empate");
} 
else if(maq === piedra && jugador === papel) {
    console.log("pc:piedra / jugador:papel Gana jugador");
}
else if(maq === piedra && jugador === tijera){
    console.log("pc:piedra / jugador: tijera Gana pc");
}
else if(maq === papel && jugador === piedra){
    console.log("pc:papel / jugador:piedra gana pc");
}
else if(maq === papel && jugador === papel){
    console.log("pc:papel / jugador:papel Empate");
}
else if(maq === papel && jugador === tijera){
    console.log(`pc:papel / jugador:tijera gana Jugador`);
}
else if(maq === tijera && jugador === piedra){
    console.log("pc:tijera / jugador:piedra gana Jugador");
}
else if(maq === tijera && jugador === papel){
    console.log("pc:tijera / jugador:papel gana pc");
}

else if(maq === tijera && jugador === tijera){
    console.log("pc:tijera / jugador:tijera Empate");
}

}

jugar();




