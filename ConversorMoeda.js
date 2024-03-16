class ConversorMoeda{
    constructor(valor,origem, destino){
        this.valor = valor
        this.origem = origem 
        this.destino = destino
        this.ConverterMoeda(this.valor, this.origem, this.destino)
    }

    async ConverterMoeda(valor, origem, destino){
        const url = `https://economia.awesomeapi.com.br/json/last/${origem}-${destino}`
        const resposta = await fetch(url)
        const dados = await resposta.json()
        let moeda = origem + destino
        let taxaCambio = dados[`${moeda}`]['bid']
        let converter = (valor * taxaCambio).toFixed(2)
        console.log(`O valor de ${valor} da moeda em ${origem} para ${destino} é de ${converter}`);
        //console.log(dados[`${moeda}`]['bid']);
    }
}
let moeda = new ConversorMoeda(1000,'BRL', 'USD')