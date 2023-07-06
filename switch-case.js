var mês = 11
switch (mês) {
    case 1:
    console.log('Janeiro')
    break;
    case 2:
    connsole.log('Fevereiro')
    break;
    case 3:
    console.log('Março')
    break;
    case 4:
    console.log('Abril')
    break;
    case 5:
    console.log('Maio')
    break;
    case 6:
    console.log('Junho')
    break;
    case 7:
    console.log('Julho')
    break;
    case 8:
    console.log('Agosto')
    break;
    case 9:
    console.log('Setembro')
    break;
    case 10:
    console.log('Outubro')
    break;
    case 11:
    console.log('Novembro')
    break;
    case 12:
    console.log('Dezembro')
    break;
    default:
    console.log('Esse mês não existe');
}




var day = 3
switch (day) {
    case 0:
    console.log('Domingo')
    break
    case 1:
    console.log ('Segunda')
        break
    case 2:
    console.log ('Terça')
    break
    case 3:
    console.log ('Quarta')
    break
    case 4:
    console.log ('Quinta')
    break
    case 5:
    console.log ('Sexta')
    break
    case 6:
    console.log ('Sábado')
    break
    default: 
    console.log('Esse dia não existe')
}




var classificacao = 5
switch (classificacao) {
    case 1:
    console.log('Muito Ruim')
    break
    case 2:
    console.log('Ruim')
    break
    case 3:
    console.log('Regular')
    break
    case 4:
    console.log('Bom')
    break
    case 5:
    console.log('Muito Bom')
    break
    default:
    console.log('Essa classificação não existe')
}

var letra = "t"
    // vogais = ['a', 'e', 'i', 'o', 'u']

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ) {
    console.log('A letra é uma vogal')
    } else {
    console.log('A letra é uma consoante')
    }

var nota = 59
if (nota >= 60 && nota <= 100) {
    console.log('Aprovado')
} else if (nota < 60 && nota > 0){
    console.log('Reprovado')
} else {
    console.log ('Essa nota não existe')
}

