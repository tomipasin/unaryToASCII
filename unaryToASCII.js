//valor que será convertido sempre na matriz de pares, por exemplo no caso abaixo 3 pares sendo
//0 0, 00 0000, 0 00. (ASCII = C)
const n = '0 0 00 0000 0 00';
//array fazendo split por espaço
const nArray = n.split(' ');
//2 arrays, um para os pares e outro para armazenar os dados do unary.
const paresArray = []
const unary = []

//chamo a função abaixo que vai agrupar os itens do array por par e mandar para o array de pares.
pares(nArray, function(primeiro, segundo){
    paresArray.push([primeiro, segundo])
})

//função para agrupar os itens por pares
function pares(array, funct){
    for(var i=0; i < array.length; i+=2){
        //devolve o indice e o indice + 1, ou seja, os pares.
        funct(array[i], array[i + 1])
    }
}

//aqui trabalho os dados dos pares verificando o valor o elemento 0 e, baseado nele atribuit um valor
//usando repeat na quaqntidade do lenght do 2º elemento. 
for (let index = 0; index < paresArray.length; index++) {
    const element = paresArray[index];
    if(element[1] == 'undefined' || element[1] == undefined ){
        console.log('Revise o n')
        return
    }
    if(element[0] === '0' && element[1].length != 'undefined' ){
        const ocorrencias = (element[1].length)
        const num1 = '1'.repeat(ocorrencias)
        unary.push(num1)
    }
    if(element[0] === '00' && element[1].length != 'undefined' ){
        const ocorrencias = (element[1].length)
        const num0 = '0'.repeat(ocorrencias)
        unary.push(num0)
    }
}

//aqui junto o conteúdo em uma string e paço um parseInt para converter para decimal. 
console.log(`Valor original: ${nArray}`)
console.log(`Unary ("00" = 0 e "0" = 1): ${[unary]}`)
const str = unary.join('')
const decim = parseInt(str, 2);
console.log(`String: ${str}`)
console.log(`Decimal: ${decim}`)
//depois convertemos para hex e por fim para ASCII
const hexString = decim.toString(16);
console.log(`Hexadecimal: ${hexString}`)
const ascii =  String.fromCharCode(parseInt(hexString, 16));
console.log(`ASCII: ${ascii}`)