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
}

