//tamagotchi
export default class Tamagotchi {
    #nome
    #fome
    #felicidade
    #energia
    #higiene
    #trabalhar
    constructor(nome, fome, felicidade, energia, higiene, trabalhar){
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
        const tempo = 5;
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

    //metodos

    mostrarStatus(){
        return `estes são os status de ${this.nome}
-> fome: ${this.fome}
-> felicidade: ${this.felicidade}
-> energia: ${this.energia}
-> higiene: ${this.higiene}
-> trabalhar: ${this.trabalhar}`;
    }
}

