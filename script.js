//conectar api simulando do dolar um simulado  um no-sql

fetch("https://economia.awesomeapi.com.br/last/USD-BRL").then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('Dolinhos').innerHTML = "R$"+economia.USDBRL.bid
})