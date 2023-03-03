// document.write(`<br>1 - Faça um programa que sorteia um número de 0 a 9999 e mostre na tela cada um dos dígitos separadamente.exemplo: unidade: 4 dezena: 3 centena: 8 milhar:
// `)
// prize = Math.random() * 10000
// unit = Math.floor(prize % 10)
// ten = Math.floor((prize/10)%10)
// hundred = Math.floor((prize/100)%10)
// thousand = Math.floor(prize/100)

// document.write(`<br>O número sorteado foi: <strong>${prize.toFixed(0)}</strong>`)
// document.write(`<br>Os números sorteados separados:<br>Unit: ${unit.toFixed(0)} <br>Ten: ${ten.toFixed(0)} <br>Hundred: ${hundred.toFixed(0)}<br> Thousand: ${thousand.toFixed(0)}`)

// document.write(`<br><br>2 - Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu`)

// drawn = parseInt(Math.random() * 6)
// typed = parseInt(prompt(`Número digitado de 0 a 5?`))
// document.write(`<br>O número digitado: ${typed}`)
// document.write(`<br>O número sorteado: ${drawn}`)
// if(drawn == typed){
//   alert(`Parabéns!! Você acertou`)
// }else{
//   alert(`[ERRADO] tente novamente, e dê um pulo se acertar`)
// }

// document.write(`<br><br>3 - Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que foi multado. A multa vai custar R$7,00 por cada KM acima do limite.`)

// velMax = 80
// ticket = 7

// vel = +(prompt(`<br>Velocidade do carro?`))
// if(vel > 80){
//   ticket = ticket * (vel - velMax)
//   document.write(`<br>A velocidade é <strong>${vel} Km/h</strong>.<br>O veiculo foi <strong>Multado</strong> em <strong>R$  ${ticket.toFixed(2)}</strong>`)
// }else{
//   document.write(`<br><strong>Parabéns o veiculo está dentro do limite de velocidade</strong>`)
// }

// document.write(`<br><br>4 - Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$ 0,50 por KM para viagens de até 200Km e R$ 0,45 para viagens mais longas.`)

// distance = +(prompt(`A distância é?`))
// ticket = 0

// if(distance <= 200){
//   ticket = distance * 0.5
//   document.write(`<br>A distância da sua viagem ${distance} Km.<br>O preço da sua passagem é R$ ${ticket.toFixed(2)}`)
// }else{
//   ticket = distance * 0.45
//   document.write(`<br>A distância da sua viagem ${distance} Km.<br>O preço da passagem R$ ${ticket.toFixed(2)}`)
// }

// document.write(`<br><br>5 - Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.
// `)

// year = +(prompt(`Digite o ano:`))
// if(year % 4 == 0){
//   document.write(`<br>O ano de ${year} é Bissexto.`)
// }else{
//   document.write(`<br>O ano de ${year} não é Bissexto.`)
// }

document.write(`<br>6 - Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.`)
n1 = +(prompt(`<br>Digite n1:`))
n2 = +(prompt(`<br>Digite n2:`))
n3 = +(prompt(`<br>Digite n3:`))
if(n1 > n2 || n1 > n3){
  nuM = Math.max(n1, n2, n3)
  document.write(`<br>O número maior é n1 ${nuM}.`)
}else if(n2 > n1 || n2 > n3){
  nuM = Math.max(n1, n2, n3)
  document.write(`<br>O número maior é n2 ${nuM}.`)
}else if(n3 > n1 || n3 > n2){
  nuM = Math.max(n1, n2, n3)
  document.write(`<br>O número maior é n3 ${nuM}.`)
}else{
  nuN = Math.min(n1, n2, n3)
  document.write(`O número menor ${nuN}`)
}