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
                            <td>Data de Entrada:</td>
                            <td>Nome da Levedura:</td>
                            <td>Marca:</td>
                            <td>Atenuação:</td>
                            <td>Floculação:</td>
                            <td>Perfil Fermentativo</td>
                            <td>Qtd. Repiques</td>
                            <td>Próximo Repique</td>
                        </tr>
                    </thead>
                <tbody id="leveduras-list">
            ${model.map(levedura => `
                        <tr class="listagem" id="${levedura.id}">
                            <td>${DateHelper.dataParaTexto(levedura.dataEntrada)}</td>
                            <td>${levedura.nome}</td>
                            <td>${levedura.marca}</td>
                            <td>${levedura.atenuacao}%</td>
                            <td>${levedura.floculacao}</td>
                            <td>${levedura.perfil}</td>
                            <td>${levedura.repiques}</td>
                            <td>${DateHelper.dataParaTexto(levedura.proxRepique)}</td>

                            <td class="td-acao"><button onclick="controller.repicar(${levedura.id})">Repicar</button></td>
                            <td class="td-acao"><button onclick="controller.deletar(${levedura.id})">Apagar</button></td>
                        </tr>
                        `).join('\n')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td colspan="7">${model.length}</td>
                        </tr>
                    </tfoot>
                </table>
                        `;
    };

};