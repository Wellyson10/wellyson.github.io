window.onload = function () {
    let receita = {}
    receita.nome = sessionStorage.getItem('nome')
    receita.descricao = sessionStorage.getItem('descricao')
    receita.foto = sessionStorage.getItem('foto')
    receita.ingredienteList = sessionStorage.getItem('ingredientes').split(',')
    receita.preparoList = sessionStorage.getItem('preparo').split(',')
  
    document.querySelector('.container').appendChild(carregaReceita(receita))
  }
  
  function carregaReceita(receita) {
    let divReceita = document.createElement('div')
    let htmlStr = `<div class="row">
              <div class="col-xs-6">
                  <h1 class="text-center">${receita.nome}</h1>
              </div>
              <div class="col-xs-2 offset-xs-4">
                  <i class="glyphicon glyphicon-star"></i>
                  <i class="glyphicon glyphicon-star"></i>
                  <i class="glyphicon glyphicon-star"></i>
                  <i class="glyphicon glyphicon-star"></i>
                  <i class="glyphicon glyphicon-star-empty"></i>
              </div>
          </div>
          <div class="row">
              <img src="${receita.foto}" class="img-thumbnail">
          </div>
          <div class="row">
              <p>${receita.descricao}</p>
          </div>
          <div class="row">
              <h3>Ingredientes</h3>
              <ul id="ingrediente">${receita.ingredienteList}
              </ul>
          </div>
          <div class="row">
              <h3>Modo de Preparo</h3>${receita.preparoList}
              <ol id="preparo">
              </ol>
          </div>`
    divReceita.innerHTML = htmlStr
    return divReceita
  }