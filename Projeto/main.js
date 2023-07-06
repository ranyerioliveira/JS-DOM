
// ---get all keys (pegar todas as teclas)---

const keys = document.querySelectorAll(".key")


//---play notes (tocar notas)---
//criando uma função

function playNote(event){
   
   
   let audioKeyCode = getKeyCode(event);

   console.log(audioKeyCode)
  
   //tipo da tecla

  const key = document.querySelector('[data-key="${audioKeyCode}"]')
  
   //se a tecla existe

   const cantFoundAnyKey = !key //o ! é o inverter no boolean

   if(cantFoundAnyKey){
      return;
   }
    
   //play midia  

   

}

function getKeyCode(event){
   let keyCode;

   const iskeyboard = event.type === "keydown"

   if(iskeyboard){
      keyCode = event.keyCode
   }else{
      keyCode = event.target.dataset.key;
   }
   return keyCode;
}


// ---click with mouse (clicar o mouse)---


keys.forEach(function (key){
   key.addEventListener("click", playNote )
})//forEach siginifa para cada 

// ---keyboard type  (clicar no teclado)---
//colocando enventos
window.addEventListener("keydown", playNote) // o keydown serve para que toda vez que focar apertada uma tecla no teclad ele vai rodar uma function


