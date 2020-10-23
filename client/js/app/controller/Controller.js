class Controller {
    constructor() {
        const $ = document.querySelector.bind(document);

        this._id = $("#id");
        this._especie = $("#especie");
        this._dataEntrada = $("#entrada");
        this._repicagem = $("#repicagem");

        this._listaLeveduras = new ListaLeveduras();
        this._levedurasView = new LevedurasView($("#levedurasView"));

    };

    adiciona(event) {

        event.preventDefault();

        let novaLevedura = this.novaLevedura();

        this._listaLeveduras.adiciona(novaLevedura);

        this._levedurasView.update(this._listaLeveduras.leveduras)

        this._limpaFormulário()

    };

    novaLevedura() {
        return new LeveduraModel(
            this._id.value,
            this._especie.value,
            this._dataEntrada.value,
            this._repicagem.value);
    };

    _limpaFormulário() {
        this._id.value = "";
        this._especie.value = "";
        this._dataEntrada.value = "";
        this._repicagem.value = "";
        this._id.focus();
    };

};