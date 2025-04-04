
//atividade 1 - feita com while e um if para verificar se o numero de vezes não é negativo.
function atividade1(){
    let quanto = parseInt(prompt('quantas somas você quer realizar?'));
    let i = 0;
    let soma = 0;
    let num1 = 0;
    if(quanto < 0){
        console.log('fazer negativas vezes e foda né');
    } else {
    while(i != quanto){
        num1 = parseInt(prompt('Me o numero da soma'));
        soma = soma+num1;
        i++;
    }  console.log(soma);
    };
   
}
/* atividade 2 - Feita com if e setinterval, toda vez que a função era chamada ela verificava como tava a contagem
se estivese maior ou igual a 1 ele falava o numero e diminiuia um na contagem no final ele fala o decolar e limpa o intervalo*/
function atividade2(){
    intervaloContagem = setInterval(contagemNasa, 1000);
    let contagem = 10;
    console.log('INICIANDO CONTAGEM PARA DECOLAGEM')
    function contagemNasa(){
        if (contagem>=1){
                console.log(contagem);
                contagem--;
            } else {
                console.log('DECOLAR AO ESPAÇO');
                clearInterval(intervaloContagem);
            } 
        } 
}

/* atividade 3 - feita com if e for, o for e para receber o valor nos 12 meses somando todos na mesma variavel
depois sigo uma serie de if para ver se saiu no prejuizo ou não ou se zerou tudo.*/
function atividade3(){
    console.log('me diga como sua empreza vai nas vendas');

    const ganhoBruto = parseFloat(prompt('Qual foi seu ganho bruto?'));

    console.log(' agora me diga quanto foi seu gasto mensal, mês por mês');

    let gastoTotal = 0

    for(let i = 1; i <= 12 ; i++ ){
        gastoTotal = gastoTotal+parseFloat(prompt('quantos você gasto no ' + i + 'º mês?'));
    }

    console.log(' seu total de ganhos foi ' + ganhoBruto + ' reais');

    console.log(' seu total de gastos foi ' + gastoTotal + ' reais');

    console.log(' seu total de saldo é ' + (ganhoBruto-gastoTotal) + ' reais');
    if((ganhoBruto-gastoTotal) == 0){
        console.log('zero tudo');
    } else {
        if(ganhoBruto < gastoTotal){
        console.log(' Sua empresa teve um prejuizo de ' + (gastoTotal-ganhoBruto) + ' reais');
        } else {
        console.log('sua empresa ficou positivo no fim do ano!');
        }
    }
}

//atividade 4 - Utilizando for para fazer as perguntas e o sort para organizar.

function atividade4(){
    let decrescente = [];
    let o = 0;
    for(let u = 0; u <= 3; u++){
        decrescente[u] = parseInt(prompt('me diga um numero.'));
    }
    console.log('decrescente:', decrescente.sort().reverse());
}

//atividade 5 - Utilizando if com comparativo de mod o "%" para ver se é par ou impar.
function atividade5(){
    console.log('invertedor de par e impar')
    let number = parseInt(prompt('Me de um numero'));

    if(number % 2 == 0){
        console.log(' seu numero é par então toma ele impar: ' + (number-1));
        console.log('tcharam!');
    } else {
        console.log(' seu numero é impar então toma ele par: ' + (number+1));
        console.log('tcharam!');
    }
}