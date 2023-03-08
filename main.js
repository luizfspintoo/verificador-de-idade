function Verificar() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var anoNasc = window.document.getElementById('anonasc')
  var resposta = window.document.getElementById('res')
  if (anoNasc.value.length == "" || anoNasc.value == 0 || anoNasc.value > anoAtual) {
    window.alert('[ERRO]') 
  } else {
    var sexo = window.document.getElementsByName('rsex')
    var genero = ''
    var idade = anoAtual - Number(anoNasc.value)
    var imagem = window.document.createElement('img')
    imagem.setAttribute('id','foto')
    if (sexo[0].checked ? genero = 'Homem' : genero = 'Mulher') {
      if (idade >= 0 && idade < 10) {
        //Criança
        imagem.setAttribute('src', 'crianca-homem.jpg')
      } else if (idade < 21) {
        //Jovem
        imagem.setAttribute('src', 'jovem-homem.jpg')
      } else if (idade < 50) {
        //Adulto
        imagem.setAttribute('src', 'adulto-homem.jpg')
      } else if(idade > 50) {
        //Idoso
        imagem.setAttribute('src', 'idoso-homem.jpg')
      }
    } else {
      if (idade >= 0 && idade < 10) {
        //Criança
      } else if (idade < 21) {
        //Jovem
      } else if (idade < 50) {
        //Adulto
      } else if(idade > 50) {
        //Idoso
      }
    }
    resposta.innerHTML = `Sua idade é: <strong>${idade} anos</strong> <br> Seu gênero é ${genero}`
    resposta.appendChild(imagem).style.margin = '15px 0px'
  }
}