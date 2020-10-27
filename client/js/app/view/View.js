class View {

    constructor(elemento) {

        this._div = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model) {

        this._div.innerHTML = this.template(model);
    }


}   