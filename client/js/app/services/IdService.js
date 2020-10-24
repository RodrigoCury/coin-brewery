class IdService {
    constructor() {
        throw new Error("Essa classe não deve ser instanciada")
    }

    static generateNewId(lista) {
        let id = Math.floor(Math.random() * 100000) + 1
        console.log(id)
        lista.forEach(levedura => {
            if (levedura.id == id && lista.length > 0) {
                return this.generateNewId(lista)
            }

            return id
        })
    }
}