window.onload = function(){
  let btTestar = document.getElementById("testar");
  //btTestar.addEventListener("click", verificarPalindromo);
  btTestar.addEventListener("click", CreateBagOfWords);
}

var verificarPalindromo = () =>{
  let texto = document.getElementById("frase").value;
  let textoList = texto.split("");//transformar string  em array
  let textoInvertidoList = [];
  textoList.forEach((letra) =>{
    textoInvertidoList.unshift(letra); //unshift acrescenta elementos no incio do array
  });

  let paragrafo = document.getElementById("resposta");
  let resp = "";
  if(textoInvertidoList.join("") == texto){  //transformar array em string 
    resp = (` O texto <q><strong>${texto}</strong></q> é um palindrome`);
  } else{
    resp = (`O texto <q><strong>${texto}</strong></q> não é um palindrome`);
  }
  paragrafo.innerHTML = resp;
}

function Termo(palavra){
  this.palavra = palavra;
  this.frequencia = 1;
  this.incrementa = () =>{
    this.frequencia ++;
  }
}

function CreateBagOfWords(){
  let texto = document.getElementById("frase").value;
  let textoList = texto.split(" ");
  textoList = textoList.map(function(palavra){
    return removeSpecialChar(palavra);
  });
  console.log(textoList);
  // remove o "" do list

  let ocorrencias = [];
  textoList.forEach(function(palavra){ //percorrer o array de palavras
  });
    console.log(ocorrencias);
}

function removeSpecialChar(palavra){
  //intervalo de caracteres validos
  let codigo = palavra.charCodeAt(palavra.length-1);
  if(codigo<65 || codigo>90 && codigo<97 || codigo>122){
    //remover ultimo caracter
    palavra = palavra.substr(0, palavra.length-1);
  }
  return palavra;
}