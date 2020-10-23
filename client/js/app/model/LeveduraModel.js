class LeveduraModel {
    constructor(id, especie) {
        this._id = id;
        this._especie = especie;
        this._dataEntrada = new Date().getTime;
        this._dataRepicagem;
        this._dataLimite;
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

    setDataEntrada() {
        novaData = new Date();
        this._dataEntrada = novaData
    };

    setDataRepicagem(data) {
        novaData = new Date(data);
        this._dataRepicagem = novaData
    };

    calculaDataLimite() {
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