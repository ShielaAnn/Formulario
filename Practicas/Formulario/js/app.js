



const button1 = document.querySelector('#button1')
const range   = document.querySelector('#range')   

    button1.addEventListener('click',() =>{
        alert('Has valorado con ' + range.value + ' puntos.')
     })

 const button2   = document.querySelector('#button2')
 const cuenta    = document.querySelector('#cuenta')

  button2.addEventListener('click',() =>{        
     alert ('Le informamos que su cuenta es:' + cuenta.value )
 }) 


 const button3   = document.querySelector('#button3')
 const date      = document.querySelector('#date')

   button3.addEventListener('click',() =>{
         alert('La fecha seleccionada en el elemento de fecha es un' + date.value)
         
     })

