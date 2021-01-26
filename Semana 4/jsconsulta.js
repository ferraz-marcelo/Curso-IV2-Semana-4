var produtos = JSON.parse(localStorage.getItem('produtos'))

if (produtos == null) {
    produtos = []
}

var tabela = document.getElementById('listatabela')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var nome = produto['nome']
    var tipo = produto['tipo']
    var caract = produto['caract']
    var nserie = produto['nserie']
    
    var th = listatabela.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
    td[0].innerHTML = nome
    td[1].innerHTML = tipo
    td[2].innerHTML = caract
    td[3].innerHTML = nserie
}