class Imc {
    constructor(peso, altura){
        this.peso = peso
        this.altura = altura
        let imc = this.CalcularImc(this.peso,this.altura)
        this.FaixaPeso(imc)
    }
    CalcularImc(peso, altura){
        let imc = (peso/(altura * altura)).toFixed(1)
        console.log(`Seu IMC é de ${imc}`);
        return imc
    }
    FaixaPeso(imc){
        if (imc <= 18.5) {
            console.log(`Sua faixa de peso é baixo do peso`);
        } else if (imc > 18.5 && imc <= 24.9) {
            console.log(`Sua faixa de peso é saudavél`);
        } else if (imc >= 25 && imc <= 29.9) {
            console.log(`Sua faixa de peso é sobrepeso`);
        } else if (imc >= 30 && imc <= 34.9) {
            console.log(`Sua faixa de peso é obesidade grau I`);
        } else if (imc >= 35 && imc <= 39.9) {
            console.log(`Sua faixa de peso é obesidade grau II`);
        } else if (imc >= 40) {
            console.log(`Sua faixa de peso é obesidade grau III`);
        }
    }
}
let imc = new Imc(62,1.60)