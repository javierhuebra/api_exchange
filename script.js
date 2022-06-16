/* function calculate(){
    fetch( 'items.json' )
    .then(res=>res.json())
    .then(data=>console.log(data));
}

calculate(); */

const monedaEl_one = document.getElementById("moneda-uno");
const monedaEl_two = document.getElementById("moneda-dos");
const cantidadEl_one = document.getElementById("cantidad-uno");
const cantidadEl_two = document.getElementById("cantidad-dos");
const cambioEl = document.getElementById("cambio");
const tasaEl = document.getElementById("tasa");
const botonEl = document.getElementById("tasa");

function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/5257a4a517d213d46f482c10/latest/${moneda_one}`)
    .then(res => res.json())
    .then(data=> 
       { const tasa = data.conversion_rates[moneda_two]
         console.log(tasa);        
         cambioEl.innerHTML = `1 ${moneda_one} = ${tasa} ${moneda_two}`;
         
         cantidadEl_two.value=(cantidadEl_one.value*tasa).toFixed(2);        
    
        });

    
    
}

monedaEl_one.addEventListener('change',calculate);
cantidadEl_one.addEventListener('input',calculate);
monedaEl_two.addEventListener('change',calculate);
cantidadEl_two.addEventListener('input',calculate);

botonEl.addEventListener("click",()=>{
    const temp =monedaEl_one.value;
    monedaEl_one.value=monedaEl_two.value;
    monedaEl_two.value=temp;
    calculate();
})