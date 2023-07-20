function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var txtAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(txtAno.value == 0 || txtAno.value > ano) {
        window.alert('Erro! Digite um valor válido')
    }
    else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - txtAno.value
        var genero = ''

        if(sex[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/homem-crianca.png')
            }
            else if(idade < 21) {
                img.setAttribute('src', 'assets/homem-jovem.png')
            }
            else if(idade < 50) {
                img.setAttribute('src', 'assets/homem-adulto.png')
            }
            else {
                img.setAttribute('src', 'assets/homem-idoso.png')
            }
        }
        else {
            genero = 'Feminino'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'assets/mulher-crianca.png')
            }
            else if(idade < 21) {
                img.setAttribute('src', 'assets/mulher-jovem.png')
            }
            else if(idade < 50) {
                img.setAttribute('src', 'assets/mulher-adulta.png')
            }
            else {
                img.setAttribute('src', 'assets/mulher-idosa.png')
            }
        }

        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}