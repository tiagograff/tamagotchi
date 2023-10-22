export default class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.health = 50;
    this.happiness = 50;
    this.clean = 50;
    this.smart = 50;
    this.money = 50;
    this.age = 0;
    this.life = true;
  }

  // método de alimentação
  feed() {
    if (this.life) {
      this.hunger += 20;
      this.happiness += 5;
      this.clean -= 5;
      this.money -= 5;
    }
    this.checkStatus();
  }

  //metodo de cuidar
  care() {
    if (this.life) {
      this.health += 20;
      this.happiness += 5;
      this.clean += 5;
      this.money -= 10;
    }
    this.checkStatus();
  }

  //metodo de brincar
  play() {
    if (this.life) {
      this.happiness += 20;
      this.clean -= 5;
      this.money -= 10;
    }
    this.checkStatus();
  }

  //metodo de tomar banho
  shower() {
    if (this.life) {
      this.clean += 20;
      this.happiness -= 5;
    }
    this.checkStatus();
  }

  //metodo de estudar
  study() {
    if (this.life) {
      this.smart += 20;
      this.happiness -= 10;
      this.money += 5;
    }
    this.checkStatus();
  }

  //metodo de trabalhar
  work() {
    if (this.life) {
      this.money += 20;
      this.happiness -= 10;
      this.hunger -= 5;
      this.clean -= 5;
    }
    this.checkStatus();
  }

  //metodo de envelhecer
  getOld() {
    if (this.life) {
      this.hunger -= 5;
      this.health -= 5;
      this.happiness -= 5;
      this.clean -= 5;
      this.smart -= 5;
      this.money -= 5;
      this.age += 1;
    }
    this.checkStatus();
  }

  //printa os status
  printStatus() {
    alert(
      `--status--\n` +
        `nome: ${this.name}\n` +
        `idade: ${this.age}\n` +
        `saúde: ${this.health}\n` +
        `felicidade: ${this.happiness}\n` +
        `limpeza: ${this.clean}\n` +
        `inteligência: ${this.smart}\n` +
        `dinheiro: ${this.money}\n`
    );
  }

  //verifica status
  checkStatus() {
    if (
      this.hunger <= 0 ||
      this.health <= 0 ||
      this.happiness <= 0 ||
      this.money <= 0 ||
      this.smart <= 0 ||
      this.clean <= 0
    ) {
      this.life = false;
    }
  }
}
