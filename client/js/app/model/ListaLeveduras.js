class ListaLeveduras {
    constructor() {
        this._lista = [];
    };

    adiciona(levedura) {
        this._lista.push(levedura);
    };

    apagaItem(id) {
        this._lista = this._lista.filter((value, index, arr) => {
            return value.id != id
        });
        console.log(this._lista)
    };

    get leveduras() {
        return [].concat(this._lista);
    };

};