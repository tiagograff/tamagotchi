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

    if (escolha === 'comer'){
        novoTamagotchi.acao(true,null,false,null,false);
    }
    if (escolha === 'jogar video game'){
        novoTamagotchi.acao(null,true,null,false,false);
    }
    if (escolha === 'dormir'){
        novoTamagotchi.acao(false,null,null,true,false);
    }
    if (escolha === 'tomar banho'){
        novoTamagotchi.acao(null,null,true,null,false);
    }
    if (escolha === 'trabalhar'){
        novoTamagotchi.acao(false,false,false,false,true);
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