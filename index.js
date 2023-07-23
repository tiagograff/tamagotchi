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
    }
    if(escolha === 'jogar video game'){
        novoTamagotchi.fome = true;
        novoTamagotchi.fome = false;
    }
    if(escolha === 'dormir'){
        novoTamagotchi.fome = true;
        novoTamagotchi.fome = false;
    }
    if(escolha === 'tomar banho'){
        novoTamagotchi.fome = true;
    }
    if(escolha === 'trabalhar'){
        novoTamagotchi.fome = true;
        novoTamagotchi.fome = false;
    }

    //mostrar status

    let status = novoTamagotchi.mostrarStatus();
    alert(status);

    let continuar = prompt('deseja continuar? "sim e s" ou "qualquer outro botão para sair"');
    if (continuar === 'sim' || continuar === 's'){
        terminar = false;
    }else{
        alert('até mais =)');
        terminar = true;
    }
}

console.log(novoTamagotchi.fome)