class LeveduraService {
    cadastra(objeto) {
        return ConnectionFactory.getConnection()
            .then(conexao => new LevedurasDao(conexao))
            .then(dao => dao.adiciona(objeto))
            .then(() => console.log("Adicionado ao DB com sucesso"))
            .catch(error => console.log(error))
    }

    listaTodos() {
        return ConnectionFactory.getConnection()
            .then(conexao => new LevedurasDao(conexao))
            .then(dao => dao.listaTodos())
            .catch(error => console.log(error))
    }

    altera(objetoAntigo, objetoNovo) {
        return ConnectionFactory.getConnection()
            .then(conexao => new LevedurasDao(conexao))
            .then(dao => dao.altera(objetoAntigo, objetoNovo))
            .then(() => console.log(`${objetoNovo.nome}|${objetoNovo.id} Atualizado com sucesso`))
            .catch(error => console.log(error))
    }

    apaga(objeto) {
        return ConnectionFactory.getConnection()
            .then(conexao => new LevedurasDao(conexao))
            .then(dao => dao.deleta(objeto.id))
            .then(() => console.log(`${objeto.nome}|${objeto.id} apagado do DB com sucesso`))
            .catch(error => console.log(error))
    }

    limpa() {
        return ConnectionFactory.getConnection()
            .then(conexao => new LevedurasDao(conexao))
            .then(dao => dao.limpa())
            .then(() => console.log("DB limpada com sucesso"))
            .catch(error => console.log(error))
    }
}