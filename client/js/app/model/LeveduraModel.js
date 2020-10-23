class LeveduraModel {
    constructor(nome, marca, entrada, atenuacao, floculacao, perfil, repiques) {
        console.log(atenuacao)
        this._dataEntrada = this._setDataEntrada(entrada);
        this._nome = nome;
        this._marca = marca;
        this._atenuacao = atenuacao ? atenuacao : "N/D";
        this._floculacao = floculacao;
        this._perfil = perfil;
        this._repiques = repiques;
        this._proxRepique = this._calculaDataRepicagem();

        console.log(this._dataEntrada, this._proxRepique)
    };

    _setDataEntrada(entrada) {
        if (entrada) {
            return DateHelper.textoParaData(entrada);
        } else {
            return new Date();
        };
    };

    _calculaDataRepicagem() {
        let dataRepicagem = new Date(this._dataEntrada.getTime());
        dataRepicagem.setMonth(this._dataEntrada.getMonth() + 5);
        dataRepicagem.setDate(this._dataEntrada.getDate() + 15);

        return dataRepicagem
    };

    repicar() {
        this._repiques += 1
        this._proxRepique = new Date(this._proxRepique.getTime())
            .setMonth(this._proxRepique.getMonth() + 5)
            .setDate(this._proxRepique.getDate() + 15);
    }

    get dataEntrada() {
        return new Date(DateHelper.dataParaForm(this._dataEntrada));
    };

    get nome() {
        return this._nome;
    };

    get marca() {
        return this._marca;
    };

    get atenuacao() {
        return this._atenuacao;
    };

    get floculacao() {
        return this._floculacao;
    };

    get perfil() {
        return this._perfil;
    };

    get repiques() {
        return this._repiques;
    };

    get proxRepique() {
        return new Date(DateHelper.dataParaForm(this._proxRepique));
    };

    set dataEntrada(data) {
        this._dataEntrada = DateHelper.textoParaData(data);
    };

    set nome(nome) {
        this._nome = nome;
    };

    set marca(marca) {
        this._marca = marca;
    };

    set atenuacao(atenuacao) {
        this._atenuacao = atenuacao;
    };

    set floculacao(floculacao) {
        this._floculacao = floculacao;
    };

    set perfil(perfil) {
        this._perfil = perfil;
    };

    set repiques(repiques) {
        this._repiques = repiques;
    }

    set proxRepique(proxRepique) {
        this._proxRepique = proxRepique;
    };

};