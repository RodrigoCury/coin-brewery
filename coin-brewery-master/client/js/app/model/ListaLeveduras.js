class ListaLeveduras {
    constructor() {
        this._lista = [];
    };

    adiciona(levedura) {
        this._lista.push(levedura);
    };

    apagaItem(objeto) {
        this._lista = this._lista.filter((value, index, arr) => value != objeto);
    };

    get leveduras() {
        return [].concat(this._lista);
    };

    concatenaLista(lista) {
        this._lista.concat(lista)
    }
};