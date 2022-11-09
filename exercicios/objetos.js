class Pessoa {
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const paula = new Pessoa();
paula.nome = 'Paula  Lima';
paula.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan j Paula'
renan.idade = 30;

paula.descrever();
renan.descrever();