class LevedurasDao {

    constructor(conexao) {
        this._conexao = conexao;
        this._store = "Leveduras"
    }

    listaTodos() {

        return new Promise((resolve, reject) => {

            let transaction = this._conexao.transaction([this._store], "readwrite");

            let store = transaction.objectStore(this._store);

            let cursor = store.openCursor();

            let leveduras = [];

            cursor.onsuccess = event => {

                let cursorAtual = event.target.result;

                if (cursorAtual) {

                    let dado = cursorAtual.value;

                    leveduras.push(new LeveduraModel(dado._nome,
                        dado._marca,
                        dado._dataEntrada,
                        dado._atenuacao,
                        dado._floculacao,
                        dado._perfil,
                        dado._repiques,
                        dado._proxRepique,
                        dado._id));

                    cursorAtual.continue();

                } else {
                    resolve(leveduras)

                }


            };

            cursor.onerror = event => {

                reject(console.log(event.target.error.name));

            };
        })
    };

    adiciona(objeto) {

        return new Promise((resolve, reject) => {

            let transaction = this._conexao.transaction([this._store], "readwrite");

            let store = transaction.objectStore(this._store);

            let site = objeto;

            let request = store.add(site);

            request.onsuccess = e => {
                resolve(console.log("site incluido com sucesso"));
            };

            request.onerror = e => {
                reject(console.log("site não foi incluido"));
            };

        })

    };

    deleta(id) {
        return new Promise((resolve, reject) => {

            let transaction = this._conexao.transaction([this._store], "readwrite");

            let store = transaction.objectStore(this._store);

            let cursor = store.openCursor();

            cursor.onsuccess = event => {

                let cursorAtual = event.target.result;

                if (cursorAtual) {

                    let dado = cursorAtual.value;

                    if (dado._id == id) {

                        let request = store.delete(cursorAtual.primaryKey);

                        request.onsuccess = event => {
                            let msgSucesso = id + " deletado com sucesso"
                            resolve(msgSucesso)
                        };

                        request.onerror = event => {
                            reject(event.target.error)
                        };

                    }
                    cursorAtual.continue();
                };

            };
        });

    };

    altera(objetoAntigo, objetoNovo) {
        return new Promise((resolve, reject) => {

            let transaction = this._conexao.transaction([this._store], "readwrite");

            let store = transaction.objectStore(this._store);

            let cursor = store.openCursor();

            cursor.onsuccess = event => {

                let cursorAtual = event.target.result;

                if (cursorAtual) {

                    let dado = cursorAtual.value;

                    if (dado._id == objetoAntigo.id) {

                        let request = cursorAtual.update(objetoNovo);

                        request.onsuccess = event => {
                            resolve()
                        };

                        request.onerror = event => {
                            reject(event.target.error)
                        };

                    }
                    cursorAtual.continue();
                };

            };
        });

    };

    limpa() {

        return new Promise((resolve, reject) => {
            let transaction = this._conexao.transaction([this._store], "readwrite");

            let store = transaction.objectStore(this._store);

            let request = store.clear();

            request.onsuccess = event => [
                resolve("Database limpada com sucesso")
            ];

            request.onerror = event => {
                reject(event.target.error)
            };
        });
    };


}