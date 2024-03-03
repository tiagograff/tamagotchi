"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tamagotchi =
/*#__PURE__*/
function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.hunger = 50;
    this.health = 50;
    this.happiness = 50;
    this.clean = 50;
    this.smart = 50;
    this.money = 50;
    this.age = 0;
    this.life = true;
  } // método de alimentação


  _createClass(Tamagotchi, [{
    key: "feed",
    value: function feed() {
      if (this.life) {
        this.hunger += 20;
        this.happiness += 5;
        this.clean -= 5;
        this.money -= 5;
      }

      this.checkStatus();
    } //metodo de cuidar

  }, {
    key: "care",
    value: function care() {
      if (this.life) {
        this.health += 20;
        this.happiness += 5;
        this.clean += 5;
        this.money -= 10;
      }

      this.checkStatus();
    } //metodo de brincar

  }, {
    key: "play",
    value: function play() {
      if (this.life) {
        this.happiness += 20;
        this.clean -= 5;
        this.money -= 10;
      }

      this.checkStatus();
    } //metodo de tomar banho

  }, {
    key: "shower",
    value: function shower() {
      if (this.life) {
        this.clean += 20;
        this.happiness -= 5;
      }

      this.checkStatus();
    } //metodo de estudar

  }, {
    key: "study",
    value: function study() {
      if (this.life) {
        this.smart += 20;
        this.happiness -= 10;
        this.money += 5;
      }

      this.checkStatus();
    } //metodo de trabalhar

  }, {
    key: "work",
    value: function work() {
      if (this.life) {
        this.money += 20;
        this.happiness -= 10;
        this.hunger -= 5;
        this.clean -= 5;
      }

      this.checkStatus();
    } //metodo de envelhecer

  }, {
    key: "getOld",
    value: function getOld() {
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
    } //printa os status

  }, {
    key: "printStatus",
    value: function printStatus() {
      alert("--status--\n" + "nome: ".concat(this.name, "\n") + "idade: ".concat(this.age, "\n") + "fome: ".concat(this.hunger, "\n") + "sa\xFAde: ".concat(this.health, "\n") + "felicidade: ".concat(this.happiness, "\n") + "limpeza: ".concat(this.clean, "\n") + "intelig\xEAncia: ".concat(this.smart, "\n") + "dinheiro: ".concat(this.money, "\n"));
    } //verifica status

  }, {
    key: "checkStatus",
    value: function checkStatus() {
      if (this.hunger <= 0 || this.health <= 0 || this.happiness <= 0 || this.money <= 0 || this.smart <= 0 || this.clean <= 0) {
        this.life = false;
      }
    }
  }]);

  return Tamagotchi;
}();

exports["default"] = Tamagotchi;