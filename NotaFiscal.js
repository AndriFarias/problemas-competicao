class NotaFiscal{
    
    constructor(nome, valor){
        this.nome = nome;
        this.valor = valor;
        console.log(this.Nome(this.nome))
        let valoricms = this.CalcularIcms(this.valor)
        this.CalcularIpi(this.valor)
        this.CalcularPis(this.valor)
        this.CalcularCofins(this.valor)
        console.log(`Valor Total com Icms: R$ ${(this.valor + valoricms).toFixed(2)}`);
    }

    CalcularIcms(valor) {
        const icms = 0.175;
        let valorIcms = valor * icms
        console.log(`Valor do ICMS: R$ ${valorIcms.toFixed(2)}`)
        return valorIcms

    }
    CalcularIpi(valor) {
        const ipi = 0.07;
        let valorIpi = valor * ipi
        console.log(`Valor do IPI: R$ ${valorIpi.toFixed(2)}`)
        return valorIpi

    }
    CalcularPis(valor) {
        const pis = 0.0375;
        let valorPis = valor * pis
        console.log(`Valor do PIS: R$ ${valorPis.toFixed(2)}`)
        return valorPis

    }
    CalcularCofins(valor) {
        const cofins = 0.04;
        let valorCofins = valor * cofins
        console.log(`Valor do COFINS: R$ ${valorCofins.toFixed(2)}`)
        return valorCofins

    }
    Nome(nome){
        return `${nome} está faturando uma nota fiscal e nesta está destacado os impostos federais ICMS, IPI, PIS e COFINS.`
    }
}
let pessoa = new NotaFiscal('Andri', 1000);