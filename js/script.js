//  1  Salvare le due variabili età e km da percorrere

// 2  Applicare lo sconto in base all'età dell'utente

// 3  restiture graficamente il biglietto con il prezzo finale


// 1 

const outputTag = document.getElementById('output');
const age = document.getElementById('age');
const km = document.getElementById('km');
const sconto20 = 0.2
const sconto40 = 0.4
const sendBtn = document.getElementById('send');
const resetBtn = document.getElementById('reset')


// 2

sendBtn.addEventListener('click' , function(){
  const name = document.getElementById('name').value;
  console.log(name);
  document.getElementById('output-name').innerHTML = name ;
  const km = document.getElementById('km').value;
  console.log(km);
  document.getElementById('output-km').innerHTML = km ;
  const age = document.getElementById('age').value;
  console.log(age);
  document.getElementById('output-age').innerHTML = age;
  
  
  let price = km * 0.21 ;
  console.log(price);
  if (age === 'Minorenne') {
    price = price - (price * sconto20);
    console.log(price);
    }
 
 
 
    if (age === 'Over 65') {
    price = price - (price * sconto40);
    console.log(price);
   }

   document.getElementById('output-price').innerHTML = price.toFixed(2);
})

sendBtn.addEventListener('reset' , function(){
  document.getElementById('name').value = ""
  document.getElementById('km').value = ""
  document.getElementById('age').value = ""
})








 

