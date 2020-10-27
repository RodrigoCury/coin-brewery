class Controller {
    constructor() {
        const $ = document.querySelector.bind(document);

        this._dataEntrada = $("#entrada")
        this._nome = $("#nome")
        this._marca = $("#marca")
        this._atenuacao = $("#atenuacao")
        this._floculacao = $('input[name="floculacao"]:checked')
        this._perfil = $('input[name="perfil-fermentativo"]:checked')
        this._repiques = $("#repiques")


        this._listaLeveduras = new ListaLeveduras();
        this._levedurasView = new LevedurasView($("#levedurasView"));

        this._leveduraService = new LeveduraService();

        this._init()
    };

    async _init() {
        try {
            this._leveduraService.listaTodos()
                .then(leveduras => leveduras.forEach(levedura => this._listaLeveduras.adiciona(levedura)))
                .then(() => this._levedurasView.update(this._listaLeveduras.leveduras))
        } catch (error) {
            console.log(error)
        }
    }

    adiciona(event) {

        event.preventDefault();

        let novaLevedura = this.novaLevedura();

        console.log(novaLevedura)

        this._listaLeveduras.adiciona(novaLevedura);

        this._levedurasView.update(this._listaLeveduras.leveduras)

        this._leveduraService.cadastra(novaLevedura)

        this._limpaFormulário()
    };

    novaLevedura() {
        return new LeveduraModel(
            this._nome.value,
            this._marca.value,
            this._dataEntrada.value,
            this._atenuacao.value,
            this._floculacao.value,
            this._perfil.value,
            this._repiques.value,
            null,
            IdService.generateNewId(this._listaLeveduras.leveduras));
    };

    _limpaFormulário() {
        this._nome.value = ""
        this._marca.value = ""
        this._dataEntrada.value = ""
        this._atenuacao.value = "0.0"
        this._repiques.value = "0"
        this._nome.focus()
    };

    repicar(id) {
        this._listaLeveduras.leveduras.forEach(levedura => {

            let antigo = levedura

            if (levedura.id == id) {
                levedura.repiques += 1
                let novaData = new Date()
                novaData.setMonth(novaData.getMonth() + 5)
                novaData.setDate(novaData.getDate() + 15)
                levedura.proxRepique = novaData

                this._leveduraService.altera(antigo, levedura)
            }
        })
        this._levedurasView.update(this._listaLeveduras.leveduras)
    }

    deletar(id) {
        this._listaLeveduras.leveduras.forEach(levedura => {

            if (levedura.id == id) {
                this._listaLeveduras.apagaItem(levedura)
                this._leveduraService.apaga(levedura)

            }
        })
        this._levedurasView.update(this._listaLeveduras.leveduras)
    }
};