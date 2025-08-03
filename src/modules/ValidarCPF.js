export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCpf = cpfParcial + digito1 + digito2;
    }

    // Método estático 
    static geraDigito(cpfParcial) {
        let total = 0
        let regressivo = cpfParcial.length + 1;

        for (let valor of cpfParcial) {
            total += (regressivo * Number(valor))
            regressivo--
        }

        let digito = 11 - (total % 11);
        return digito = digito > 9 ? '0' : String(digito);
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}
