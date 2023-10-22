import Tamagotchi from "./Tamagotchi.js";

const nameTamagotchi = prompt("entre com o nome do seu tamagotchi: ");
let ok = true;
const newTamagotchi = new Tamagotchi(nameTamagotchi);

newTamagotchi.printStatus();

while (ok) {
  let question = prompt(
    `o que deseja fazer com ${newTamagotchi.name}:\n` +
      "1. alimentar\n" +
      "2. cuidar\n" +
      "3. brincar\n" +
      "4. tomar banhor\n" +
      "5. estudar\n" +
      "6. trabalhar\n"
  );

  console.log(typeof question);

  switch (question) {
    case "1":
      newTamagotchi.feed();
      break;
    case "2":
      newTamagotchi.care();
      break;
    case "3":
      newTamagotchi.play();
      break;
    case "4":
      newTamagotchi.shower();
      break;
    case "5":
      newTamagotchi.study();
      break;
    case "6":
      newTamagotchi.work();
      break;
    default:
      alert("operação inválida");
  }
  newTamagotchi.getOld();
  newTamagotchi.printStatus();
  if (newTamagotchi.life == false) {
    alert(`${newTamagotchi.name} morreu :(\n`+
    `você fez: ${newTamagotchi.age * 100} pontos`);
    ok = false;
  }
}
