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

// document.write(`<br>6 - Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.`)
// n1 = +(prompt(`<br>Digite n1:`))
// n2 = +(prompt(`<br>Digite n2:`))
// n3 = +(prompt(`<br>Digite n3:`))

// nuM = Math.max(n1, n2, n3)
// document.write(`<br>O número maior é: ${nuM}`)

// nuN = Math.min(n1, n2, n3)
// document.write(`<br>O número menor é: ${nuN}`)


// document.write(`<br><br>7 - Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$1.250,00, calcule um aumento de 10%. Para os inferiores ou iguais, o número é de 15%.`)

// wage = +(prompt(`<br>Digite o salário: `))

// if(wage > 1250){
//   document.write(`<br><br>O salário: R$ ${wage.toFixed(2)}`)
//   wage = wage * 1.10
//   document.write(`<br>O aumento do salário é de 10%: R$ ${wage.toFixed(2)}`)
// }else{
//   document.write(`<br>O salário: R$ ${wage.toFixed(2)}`)
//   wage = wage * 1.15
//   document.write(`<br>O aumento do salário é 15%: R$ ${wage.toFixed(2)}`)
// }

// document.write(`8 - Faça um script que peça dois inteiros e armazene-os em duas variáveis. Em
// seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.`)

// inta = parseInt(prompt(`Digite número inteiro: `))
// intb = parseInt(prompt(`Digite o número inteiro:`))
// alert(`<br>Os valores digitados: ${inta} and ${intb}`)
// swap = inta
// inta = intb
// intb = swap
// alert(`<br>Os valores invertidos: ${inta} and ${intb}`)

// document.write(`<br>9 - Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.`)

// shift = prompt(`Em qual turno vc estuda? M - Matutino, V - Vespentino, N - Noturno`) //Não usar o sinal de +.

// if((shift == 'M') || (shift == 'm')){
//   document.write(`<br>Bom dia!`)
// } else if((shift == 'V') || (shift == 'v')){
//   document.write(`<br>Boa tarde!`)
// }else if((shift == 'N') || (shift == 'n')){
//   document.write(`<br>Boa noite!`)
// }else{
//   alert(`<br>Valor inválidos`)
// }

// document.write(`<br><br>10 - Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.`)

// side1 = +(prompt(`Digite o lado a:`))
// side2 = +(prompt(`Digite o lado b:`))
// side3 = +(prompt(`Digite o lado c:`))

// if((side1 == side2) && (side1 == side3) && (side2 == side3)){
//   document.write(`<br>Os valores informados(${side1}, ${side2} e ${side3}) são iguais, logo, é um triangulo equilatero`)
// } else if((side1 == side2) || (side1 == side3) || (side2 == side3)){
//   document.write(`<br>Os valores informados (${side1}, ${side2} e ${side3}) apenas 2 lados são iguais, logo é um triangulo isóceles`)
// }else{
//   document.write(`<br>Os Valores informados (${side1}, ${side2} e ${side3}) são diferentes, logo é um triangulo escaleno`)
// }

document.write(`<br><strong>Desafio:</strong> Faça um script que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários`)

a = +(prompt(`Digite o valor de a: `))
b = +(prompt(`Digite o valor de b: `))
c = +(prompt(`Digite o valor de c: `))

delta = b ** 2 - 4 * a * c //Δ = b2 – 4ac

document.write(`<br>O valor de Delta é: ${delta}`)
if(delta < 0){
  document.write(`<br>Não possui raizes reais`)
} else if(delta == 0){
  x = -b / (2 * a)
  document.write(`Possui apenas uma raiz real que é: ${x}`)
}else{
  x = (-b + Math.sqrt(delta)) / 2 * a
  y = (-b - Math.sqrt(delta)) / 2 * a
  document.write(`<br>As raizes da equação são: ${x.toFixed(1)} e ${y.toFixed(1)}`)
}

