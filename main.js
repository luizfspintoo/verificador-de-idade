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
    if (sexo[0].checked) {
        genero = 'Homem'

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
    } else if(sexo[1].checked) {
        genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        imagem.setAttribute('src', 'crianca-mulher.jpg')
      } else if (idade < 21) {
        //Jovem
        imagem.setAttribute('src', 'jovem-mulher.jpg')
      } else if (idade < 50) {
        //Adulto
        imagem.setAttribute('src', 'mulher-adulta.jpg')
      } else if(idade > 50) {
        //Idoso
        imagem.setAttribute('src', 'mulher-idosa.jpg')
      }
    }
  }
  resposta.innerHTML = `Sua idade é: <strong>${idade} anos</strong> <br>Seu gênero é ${genero}<br>`
  resposta.appendChild(imagem).style = 'margin-top: 15px'
}