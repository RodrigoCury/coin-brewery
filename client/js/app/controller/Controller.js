class Controller {
    constructor() {
        const $ = document.querySelector.bind(document);

        this._id = $("#id");
        this._especie = $("#especie");
        this._dataEntrada = $("#entrada");
        this._repicagem = $("#repicagem");

        this._listaLeveduras = new ListaLeveduras();

    };

    adiciona(event) {

        event.preventDefault()

        let novaLevedura = this.novaLevedura()

        this._listaLeveduras.adiciona(novaLevedura)
        console.log(novaLevedura);
    }

    novaLevedura() {
        return new LeveduraModel(
            this._id.value,
            this._especie.value,
            this._entrada.value,
            this._repicagem.value)
    }

};