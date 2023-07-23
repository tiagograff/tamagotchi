import Tamagotchi from "./Tamagotchi.js";

const novoTamagotchi = new Tamagotchi('tiago');
console.log(novoTamagotchi.fome);

console.log(novoTamagotchi.acao(true));
console.log(novoTamagotchi.mostrarStatus());