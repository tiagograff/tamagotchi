//tamagotchi
export default class Tamagotchi {
    #nome
    #fome
    #felicidade
    #energia
    #higiene
    #trabalhar
    constructor(nome, fome = 100, felicidade = 100, energia = 100, higiene = 100, trabalhar = 100){
        this.#nome = nome;
        this.#fome = fome;
        this.#felicidade = felicidade;
        this.#higiene = higiene;
        this.#energia = energia;
        this.#trabalhar = trabalhar;
    }

    //getters

    get nome() { return this.#nome; }

    get fome() { return this.#fome; }

    get felicidade() { return this.#felicidade; }

    get energia() { return this.#energia; }

    get higiene() { return this.#higiene; }

    get trabalhar() { return this.#trabalhar; }

    //setters

    set nome(novoNome) {
        if (this.#nome !== novoNome){
            this.#nome = novoNome;
        }else{
            console.log('esse é o atual nome, para mudar precisa ser um diferente');
        }
    }

    set fome(comeu) {
        const tempo = 10;
        let updateComida = 100;
        if (comeu === true){
            updateComida += 15;
        }else{
            updateComida -= tempo;
        }
        if (updateComida >= 100){
            updateComida = 100;
        }

        this.#fome = updateComida;
    }

    set felicidade(atividade) {
        const qualidadeDeVida = 20;
        let updateFelicidade = 100;
        if (atividade === true){
            updateFelicidade += 15;
        }else{
            updateFelicidade -= qualidadeDeVida;
        }
        if (updateFelicidade >= 100){
            updateFelicidade = 100;
        }

        this.#felicidade = updateFelicidade;
    }    

    set energia(sono) {
        const qualidadeDeVida = 25;
        let updateEnergia = 100;
        if (sono === true){
            updateEnergia += 50;
        }else{
            updateEnergia -= qualidadeDeVida;
        }
        if (updateEnergia >= 100){
            updateEnergia = 100;
        }

        this.#energia = updateEnergia;
    }    

    set higiene(banho) {
        const sujeira = 10;
        let updateHigiene = 100;
        if (banho === true){
            updateHigiene += 60;
        }else{
            updateHigiene -= sujeira;      }
        if (updateHigiene >= 100){
            updateHigiene = 100;
        }

        this.#higiene = updateHigiene;
    }    

    set trabalhar(trabalho) {
        const qualidadeDeVida = 35;
        let updateTrabalho = 100;
        if (trabalho === true){
            updateTrabalho += 40;
        }else{
            updateTrabalho -= qualidadeDeVida;
        }
        if (updateTrabalho >= 100){
            updateTrabalho = 100;
        }

        this.#trabalhar = updateTrabalho;
    }    

    //metodos

    mostrarStatus(){
        return `estes são os status de ${this.nome}
-> fome: ${this.fome}
-> felicidade: ${this.felicidade}
-> energia: ${this.energia}
-> higiene: ${this.higiene}
-> trabalhar: ${this.trabalhar}`;
    }

    acao(fome,felicidade,higiene,energia,trabalhar){
        let morte = false;

        //fome
        if(fome === true){
            if(this.#fome > 0 && this.#fome < 100){
                this.#fome += 10;
            }else if(this.#fome <= 0){
                alert('você morreu!');
                morte = true;
            }
            if(this.#fome > 100){
                this.#fome = 100;
            }
        }else if (fome === false){
            this.#fome -= 10;
            if(this.#fome <= 0){
                alert('você morreu!');
                morte = true;
            }
        }

        //felicidade

        if(felicidade === true){
            if(this.#felicidade > 0 && this.#felicidade < 100){
                this.#felicidade += 20;
            }else if(this.#felicidade <= 0){
                alert('você morreu!');
                morte = true;
            }
            if(this.#felicidade > 100){
                this.#felicidade = 100;
            }
        }else if (felicidade === false){
            this.#felicidade -= 15;
            if(this.#felicidade <= 0){
                alert('você morreu!');
                morte = true;
            }
        }

        //energia

        if(energia === true){
            if(this.#energia > 0 && this.#energia < 100){
                this.#energia += 10;
            }else if(this.#energia <= 0){
                alert('você morreu!');
                morte = true;
            }
            if(this.#energia > 100){
                this.#energia = 100;
            }
        }else if (energia === false){
            this.#energia -= 35;
            if(this.#energia <= 0){
                alert('você morreu!');
                morte = true;
            }
        }

        //higiene

        if(higiene === true){
            if(this.#higiene > 0 && this.#higiene < 100){
                this.#higiene += 55;
            }else if(this.#higiene <= 0){
                alert('você morreu!');
                morte = true;
            }
            if(this.#higiene > 100){
                this.#higiene = 100;
            }
        }else if (higiene === false){
            this.#higiene -= 25;
            if(this.#higiene <= 0){
                alert('você morreu!');
                morte = true;
            }
        }

        //trabalhar

        if(trabalhar === true){
            if(this.#trabalhar > 0 && this.#trabalhar < 100){
                this.#trabalhar += 60;
            }else if(this.#trabalhar <= 0){
                alert('você morreu!');
                morte = true;
            }
            if(this.#trabalhar > 100){
                this.#trabalhar = 100;
            }
        }else if (trabalhar === false){
            this.#trabalhar -= 25;
            if(this.#trabalhar <= 0){
                alert('você morreu!');
                morte = true;
            }
        }

        return {morte}
    }
}
