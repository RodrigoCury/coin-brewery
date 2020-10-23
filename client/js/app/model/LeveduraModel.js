class LeveduraModel {
    constructor(id, especie, entrada, repicagem) {
        this._id = id;
        this._especie = especie;
        this._dataEntrada = this._setDataEntrada(entrada);
        this._dataRepicagem = this._setDataRepicagem(repicagem);
        this._dataLimite = this._calculaDataLimite();
    };

    get id() {
        return ("").join(this._id);
    };

    get especie() {
        return ("").join(this._especie);
    };

    set especie(especie) {
        this.especie = especie;
    };

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