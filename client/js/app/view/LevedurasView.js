class LevedurasView extends View {

    constructor(elemento) {

        super(elemento);
    };

    template(model) {

        return `
        <table>
            <thead class="cabecalho">
                <tr>
                    <td>ID</td>
                    <td style="width: 110px;">Espécie</td>
                    <td>Entrada</td>
                    <td style="width: 150px;">Última Repicagem</td>
                    <td>Limite</td>
                    <td>Repicar</td>
                </tr>
            </thead>
            <tbody class="leveduras">
                ${model.map(levedura => `
                        <tr class="listagem">
                            <td>${levedura.id}</td>
                            <td>${levedura.especie}</td>
                            <td>${levedura.entrada}</td>
                            <td>${levedura.repicagem}</td>
                            <td>${levedura.limite}</td>
                            <td>
                                <button class="btn-repicar">Repicar</button>
                            </td>
                        </tr>
                    `).join('\n')}
            </tbody>
            <tfoot></tfoot>
        </table>`;
    };
};