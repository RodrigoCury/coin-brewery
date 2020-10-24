class View {

    constructor(tbody) {

        this._tbody = tbody;

    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        this._tbody.innerHTML = this.template(model);
    }


}   