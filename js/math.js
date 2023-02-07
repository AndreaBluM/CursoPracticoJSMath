 const ladoCuadrado = 6;
 const perimetroCuadrado = ladoCuadrado * 4;
 const areaPerimetro = ladoCuadrado * ladoCuadrado ;
 const areaPerimetro2 = Math.pow(ladoCuadrado,2) ;

 console.log({
    perimetroCuadrado,
    areaPerimetro,
    areaPerimetro2
 })

 const ladoTriangulo1 = 6;
 const ladoTriangulo2 = 6;
 const ladoTriangulo3 = 4;
 const altura = 5.5;

 const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
 const areaTriangulo = (ladoTriangulo3 * altura) / 2;

 function calcularAreaTriangulo(base, altura){
    return (base * altura) / 2;
 }


 function calcularAlturaTrianguloisoceles(lado1, base){
   if(lado1 == base){
      console.warn('Este triangulo no es isoceles')
   } else{
      // h = raizcuadrada(Math.pow(lado1,2) - ((Math.pow(base,2)/4) )
      return Math.sqrt(Math.pow(lado1,2) - ((Math.pow(base,2)/4)))
   }

 }

 function calcularAlturaEscaleno (lado1, lado2, lado3){
   const semiPerimetro = (lado1 + lado2 + lado3) / 2;
   if(lado1 == lado2 && lado1 == lado3 ){
      console.warn('Este no es un triangulo escaleno')
   } else {
      //h = a/2 raizcuadradaS(S−a)(S−b)(S−c)
     return (2/lado1)*Math.sqrt((semiPerimetro*(semiPerimetro-lado1)*(semiPerimetro-lado2)*(semiPerimetro-lado3)))
   }
 }
 

calcularAreaTriangulo(4, 5.5)

console.group('circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = Math.pow(radioCirculo,2) * Math.PI;

console.log({
   radioCirculo,
   diametroCirculo,
   circunferencia,
   areaCirculo,
})

function CalcularCirculo (radio){
   return {
      circunferencia: (radio * 2) * Math.PI,
      area: Math.pow(radio,2) * Math.PI,
   };

}

CalcularCirculo(3)

console.groupEnd('circulo')



