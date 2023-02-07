
function calcularporcentaje(precio, descuento){
    return (precio * (100-descuento))/100;
}

const precioValue = document.querySelector('#preciovalue');
const descuentoValue = document.querySelector('#descuentovalue');
const boton = document.querySelector('#calcular')
const resultado = document.querySelector('#preciocondescuento')

boton.addEventListener('click', calculardescuento)

function calculardescuento(){
 const price = precioValue.value;
 const descount = descuentoValue.value;

 const result = (price * (100-descount))/100;
 resultado.innerText = result;

}



