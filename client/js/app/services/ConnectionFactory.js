const ConnectionFactory =
    (function () {
        const stores = ["Leveduras"];
        const version = 2;
        const dbName = "Leveduras";

        var connection = null;

        var close = null;


        return class ConnectionFactory {

            constructor() {
                throw new Error("Não é possível criar essa classe");
            };

            static getConnection() {
                return new Promise((resolve, reject) => {

                    let openRequest = indexedDB.open(dbName, version);

                    openRequest.onupgradeneeded = e => {

                        ConnectionFactory._createStores(e.target.result);
                    };

                    openRequest.onsuccess = e => {
                        if (!connection) {
                            connection = e.target.result
                            close = connection.close.bind(connection);
                            connection.close = function () {
                                throw new Error("Você não pode fechar diretamente uma conexão")
                            }
                        };
                        resolve(connection)
                    };

                    openRequest.onerror = e => {
                        reject(e.target.error.name)
                    };

                });
            };

            static _createStores(connection) {
                stores.forEach(store => {
                    if (connection.objectStoreNames.contains(store)) {
                        connection.deleteObjectStore(store);
                    };

                    connection.createObjectStore(store, { autoIncrement: true });
                });
            }

            static closeConnection() {
                close()
                connection = null
            }

        }
    })();