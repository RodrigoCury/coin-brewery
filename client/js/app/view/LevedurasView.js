class LevedurasView extends View {

    constructor(elemento) {

        super(elemento);
    };

    template(model) {

        if (model.length == 0) {
            return ""
        }

        return `
                <table class="table-levedura">
                    <thead class="cabecalho">
                        <tr>        
                            <th  class="thead tbody-l">Data de Entrada</th>
                            <th  class="thead">Nome da Levedura</th>
                            <th  class="thead">Marca</th>
                            <th  class="thead">Atenuação</th>
                            <th  class="thead">Floculação</th>
                            <th  class="thead">Perfil Fermentativo</th>
                            <th  class="thead">Qtd. Repiques</th>
                            <th  class="thead tbody-r">Próximo Repique</th>
                        </tr>
                    </thead>
                <tbody id="leveduras-list">
            ${model.map(levedura => `
                        <tr class="listagem" id="${levedura.id}">
                            <td class="tbody-l">${DateHelper.dataParaTexto(levedura.dataEntrada)}</td>
                            <td>${levedura.nome}</td>
                            <td>${levedura.marca}</td>
                            <td>${levedura.atenuacao}%</td>
                            <td>${levedura.floculacao}</td>
                            <td>${levedura.perfil}</td>
                            <td>${levedura.repiques}</td>
                            <td class="tbody-r${this._datapróxima(levedura.proxRepique)}"><span>${DateHelper.dataParaTexto(levedura.proxRepique)}</span></td>

                            <td class="td-acao"><button class="btn-repicar" onclick="controller.repicar(${levedura.id})">+</button></td>
                            <td class="td-acao"><button class="btn-repicar" onclick="controller.deletar(${levedura.id})">X</button></td>
                        </tr>
                        `).join('\n')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="tfoot tbody-l">Total</td>
                            <td class="tfoot tbody-r" colspan="7">${model.length}</td>
                            <td class="td-acao"></td>
                        </tr>
                    </tfoot>
                </table>
                        `;
    };

    _datapróxima(data) {
        let timeDelta = new Date().getTime() - data.getTime()

        if (timeDelta > -2593000000 && timeDelta < -1296000001) {
            return " aviso-médio"
        } else if (timeDelta > -1296000000 && timeDelta < 0) {
            return " aviso-alto"
        } else if (timeDelta > 0) {
            return " aviso-expirado"
        } else {
            return ""
        }
    }

};