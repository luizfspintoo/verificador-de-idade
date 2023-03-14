function Verificar() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var anoNasc = window.document.getElementById('anonasc')
  var resposta = window.document.getElementById('res')
  if (anoNasc.value == isNaN || anoNasc.value.length == "" || anoNasc.value == 0 || anoNasc.value > anoAtual) {
    window.alert('[ERRO], Verifique os dados e tente novemente') 
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
        imagem.setAttribute('src', 'images/crianca-homem.jpg')
      } else if (idade < 21) {
        //Jovem
        imagem.setAttribute('src', 'images/jovem-homem.jpg')
      } else if (idade < 30) {
        //Adulto
        imagem.setAttribute('src', 'images/adulto-homem.jpg')
      } else if(idade > 50) {
        //Idoso
        imagem.setAttribute('src', 'images/idoso-homem.jpg')
      }
    } else if(sexo[1].checked) {
        genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        imagem.setAttribute('src', 'images/crianca-mulher.jpg')
      } else if (idade < 30) {
        //Jovem
        imagem.setAttribute('src', 'images/jovem-mulher.jpg')
      } else if (idade < 50) {
        //Adulto
        imagem.setAttribute('src', 'images/mulher-adulta.jpg')
      } else if(idade > 50) {
        //Idoso
        imagem.setAttribute('src', 'images/mulher-idosa.jpg')
      }
    }
  }
  resposta.innerHTML = `Sua idade é: <strong>${idade} anos</strong> <br>Seu gênero é ${genero}<br>`
  resposta.appendChild(imagem).style = 'margin-top: 15px'
}