
function evaluarpromedio(salario1, salario2, salario3){
    return (salario1 + salario2 + salario3)/3
}

evaluarpromedio(100,200,300)

let total=0;
numeros = [10, 25, 30, 40, 45];
for(let i = 0; i < numeros.length; i++) 
total = (total + numeros[i])/ numeros.length;
//total +=numeros[i]
const promedio = total / numeros.length;
console.log(total);
console.log(numeros.length)
console.log(promedio)

function promedioreduce(array){

    function sumarelementos(valoracumulado,valornuevo){
        return valoracumulado + valornuevo;
    }
    const sumalista = array.reduce(sumarelementos);

    const promedio = sumalista / array.length
    return promedio
}

function evuluarsiespar(array){
    return (array.length % 2) == 0
}

function calcularmedia(array){

    array.sort(function(a, b) {
        return a - b;
      });

    const listaespar = evuluarsiespar(array);

    if (listaespar){
       const primernumeropar = Math.floor(array.length / 2);
       const segundonumeropar = Math.ceil(array.length / 2) - 1;
       const mediapar = (array[primernumeropar] + array[segundonumeropar]) / 2;
       console.log(mediapar)
       console.log(primernumeropar)
       console.log(segundonumeropar)


    } else {
        const indeximpar = Math.floor(array.length / 2) ;
        console.log(indeximpar);
        console.log(array[indeximpar])
    }
}

function calcularModa(array){
    
}
