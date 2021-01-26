
function ponto() {
              
    var incluirponto = document.getElementById("nserie")
       if(incluirponto.value.length == 3){
           incluirponto.value += "."
       }
 }

 function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {

        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

var produtos = JSON.parse(localStorage.getItem("produtos"));

if(produtos == null){
      produtos = [];
}

function cadastrar() {
        produtos.push({
            'nome' : document.getElementById('nome').value,
            'tipo' : document.getElementById('tipo').value,
            'caract' : document.getElementById('caract').value,
            'nserie': document.getElementById('nserie').value,
    });

    const json_produtos = JSON.stringify(produtos);

    localStorage.setItem("produtos", json_produtos);
    }