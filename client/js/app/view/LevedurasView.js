class LevedurasView extends View {

    constructor(elemento) {

        super(elemento);
    };

    template(model) {

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

            <tbody class="levedura">
                ${model.map(levedura => `
                        <tr class="listagem">
                            <td>${DateHelper.dataParaTexto(levedura.dataEntrada)}</td>
                            <td>${levedura.nome}</td>
                            <td>${levedura.marca}</td>
                            <td>${levedura.atenuacao}</td>
                            <td>${levedura.floculacao}</td>
                            <td>${levedura.perfil}</td>
                            <td>${levedura.repiques}</td>
                            <td>${DateHelper.dataParaTexto(levedura.proxRepique)}</td>

                            
                            <td class="td-repicar"><button class="btn-repicar">Repicar</button></td>

                        </tr>
                    `).join('\n')}
            </tbody>
            <tfoot></tfoot>
        </table>`;
    };
};