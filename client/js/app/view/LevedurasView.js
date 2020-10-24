class LevedurasView extends View {

    constructor(elemento) {

        super(elemento);
    };

    template(model) {

        return `
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

                            <td class="td-repicar"><button onclick="controller.repicar(${levedura.id})">Repicar</button></td>

                        </tr>
                    `).join('\n')}`;
    };

    static deleteRow(rowid) {
        let tbody = document.getElementById("leveduras-list");
        let row = tbody.children.namedItem(rowid)
        tbody.removeChild(row)

    }

};