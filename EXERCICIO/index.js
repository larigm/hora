function carregar(){
var msg = window.document.getElementById("msg")
var text = window.document.getElementById("text")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora >=0 && hora < 12){
    text.innerHTML = `Bom dia`
    document.body.style.background = "#AD898B"
    img.src = 'img/manha.jpg'
} else if (hora >= 12 && hora < 18){
    text.innerHTML = `Boa tarde`
    img.src = 'img/tarde.jpg'
    document.body.style.background = "#905E55"
} else {
    text.innerHTML = `Boa noite`
    img.src = 'img/noite.jpg'
    document.body.style.background = "#1A344A"
}
}