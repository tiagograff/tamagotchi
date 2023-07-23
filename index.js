import Tamagotchi from './Tamagotchi.js';

let nome = prompt('qual o nome você quer dar para seu tamagotchi?')
let novoTamagotchi = new Tamagotchi(nome);
alert(`seja bem vindx, cuida bem de seu ${novoTamagotchi.nome}`)
let terminar = false;
while (terminar === false){

    //escolha
    let escolha = prompt(`o que ${novoTamagotchi.nome} deve fazer agora?
    - comer
    - jogar video game
    - dormir
    - tomar banho
    - trabalhar`);

    //consequencias

    if(escolha === 'comer'){
        novoTamagotchi.fome = true;
        novoTamagotchi.higiene = false;
        novoTamagotchi.felicidade = true;
    }
    if(escolha === 'jogar video game'){
        novoTamagotchi.fome = false;
        novoTamagotchi.dormir = false;
        novoTamagotchi.trabalhar = false;
        novoTamagotchi.felicidade = true;
        novoTamagotchi.energia = false;
    }
    if(escolha === 'dormir'){
        novoTamagotchi.fome = false;
        novoTamagotchi.energia = true;
        novoTamagotchi.felicidade = true;
    }
    if(escolha === 'tomar banho'){
        novoTamagotchi.higiene = true;
        novoTamagotchi.trabalhar = false;
    }
    if(escolha === 'trabalhar'){
        novoTamagotchi.fome = false;
        novoTamagotchi.felicidade = false;
        novoTamagotchi.higiene = false;
        novoTamagotchi.energia = false;
        novoTamagotchi.trabalhar = true;
    }

    //mostrar status

    let status = novoTamagotchi.mostrarStatus();
    alert(status);

    //continuar ou acabar

    let continuar = prompt('deseja continuar? "sim e s" ou "qualquer outro botão para sair"');
    if (continuar === 'sim' || continuar === 's'){
        terminar = false;
    }else{
        alert('até mais =)');
        terminar = true;
    }
}

console.log(novoTamagotchi.fome)