/* Função para calcular quantos números primos existem, dado um número fornecido pelo usuário */

/* Um número é dito "primo" quando só é divisível por 1 e por ele mesmo, ou seja, a divisão por qualquer outro 
dentro desse intervalo terá resto diferente de 0, indicando a sua não divisibilidade por outros números */

/* A solução apresentada a seguir verifica quais números entre 2 e o fornecido atentem a esse critério */


function primeNumbers(num) {        

    let cont = 0, i, j;             //i e j são auxiliares, cont é a quantidade de números primos que se quer descobrir
    
    for (i = 2; i <= num; i++) {    
        for (j = 2; j < i; j++) {
            if (i % j == 0) {   
                break;              //laço é interrompido ao se verificar que o número em questão não é primo, pois se obteve resto 0 em uma das divisões
            }
        }
        if (i == j) {
            cont++;                 // i=j significa que o número em questão chegou ao seu próprio valor sem obter resto 0 nas divisões, logo é primo
        }
    }
    return cont;                   
}



