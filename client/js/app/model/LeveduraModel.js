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

    set especie() {
        return this.especie;
    };

    _setDataEntrada(entrada) {
        this._dataEntrada = entrada ? DateHelper.textoParaData(entrada) : new Date();
    };

    _setDataRepicagem(repicagem) {
        this._dataRepicagem = repicagem ? DateHelper.textoParaData(repicagem) : undefined;
    };

    _calculaDataLimite() {
        if (this._dataRepicagem) {
            dataLimite = this._dataRepicagem;
            dataLimite.setMonth(dataLimite.getMonth() + 6);
            console.log(dataLimite);
        } else {
            dataLimite = this._dataEntrada;
            dataLimite.setMonth(dataLimite.getMonth() + 6);
            console.log(dataLimite);
        };
    };
};