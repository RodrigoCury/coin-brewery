class LeveduraModel {
    constructor(id, especie, entrada, repicagem) {
        this._id = id;
        this._especie = especie;
        this._dataEntrada = this._setDataEntrada(entrada);
        this._dataRepicagem = this._setDataRepicagem(repicagem);
        this._dataLimite = this._calculaDataLimite();
    };

    get id() {
        return this._id;
    };

    get especie() {
        return this._especie;
    };

    set especie(especie) {
        this.especie = especie;
    };

    get entrada() {
        return DateHelper.dataParaTexto(this._dataEntrada);
    }

    get repicagem() {
        return this._dataRepicagem ? DateHelper.dataParaTexto(this._dataRepicagem) : "Ainda não foi repicado";
    }

    get limite() {
        return DateHelper.dataParaTexto(this._dataLimite);
    }



    _setDataEntrada(entrada) {

        if (entrada) {
            return DateHelper.textoParaData(entrada);
        } else {
            return new Date();
        };
    };

    _setDataRepicagem(repicagem) {
        if (repicagem) {
            return DateHelper.textoParaData(repicagem);
        } else {
            return undefined;
        };
    };

    _calculaDataLimite() {

        let dataLimite;

        if (this._dataRepicagem) {
            dataLimite = new Date(this._dataRepicagem.getTime());
            dataLimite.setMonth(dataLimite.getMonth() + 6);
            return dataLimite;
        } else {
            dataLimite = new Date(this._dataEntrada.getTime());
            dataLimite.setMonth(dataLimite.getMonth() + 6);
            return dataLimite;
        };
    };
};