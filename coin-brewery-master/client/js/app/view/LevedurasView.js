class LevedurasView extends View {

    constructor(elemento) {

        super(elemento);
    };

    template(model) {

        if (model.length == 0) {
            return ""
        }

        return `
                <table>
                    <thead class="cabecalho">
                        <tr>        
                            <td  class="thead tbody-l">Data de Entrada</td>
                            <td  class="thead">Nome da Levedura</td>
                            <td  class="thead">Marca</td>
                            <td  class="thead">Atenuação</td>
                            <td  class="thead">Floculação</td>
                            <td  class="thead">Perfil Fermentativo</td>
                            <td  class="thead">Qtd. Repiques</td>
                            <td  class="thead tbody-r">Próximo Repique</td>
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