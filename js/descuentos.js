function calcularporcentaje(precio, descuento){
    return (precio * (100-descuento))/100;
}

const precioValue = document.querySelector('#preciovalue');
const descuentoValue = document.querySelector('#descuentovalue');
const boton = document.querySelector('#calcular')
const resultado = document.querySelector('#preciocondescuento')
const cupon = document.querySelector('#cupondescuento')

boton.addEventListener('click', calculardescuento)
 
function calculardescuento(){
const price = Number(precioValue.value);
const descount = Number(descuentoValue.value);
const cupon2 = cupon.value

if (descount > 100){
   resultado.innerText = 'El descuento tiene que ser menor a 100';
   return
}
if(cupon2 === "Cupon2020"){
   const result = (price * (100-descount))/100;
   resultado.innerText = result;
} else if(cupon2 === ""){
   const result = (price * (100-descount))/100;
   resultado.innerText = result;
} else{
   resultado.innerText = 'Este cupon no es correcto';
}
}
// switch (cupon2) {
// case 'esteeselprimercupon':
//    discount: 30;
//    break;
// case 'esteeselsegundo':
//    discount: 25;
//    break
// }

