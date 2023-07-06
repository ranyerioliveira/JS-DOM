
// ---get all keys (pegar todas as teclas)---

const keys = document.querySelectorAll(".key")


//---play notes (tocar notas)---
//criando uma função

function playNote(event){
   
   
   let audioKeyCode = getKeyCode(event);

   //console.log(audioKeyCode)
  
   //tipo da tecla

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
  
   //se a tecla existe

   const cantFoundAnyKey = !key //o ! é o inverter no boolean

   if(cantFoundAnyKey){
      return;
   }
    
   //play midia  
   addPlaybgClass(key)
   playAudio(audioKeyCode)

}

function addPlaybgClass(key){
   key.classList.add("playing")
}

function getKeyCode(event){
   let keyCode;

   const iskeyboard = event.type === "keydown";
   if(iskeyboard){
      keyCode = event.keyCode
   }else{
      keyCode = event.target.dataset.key;
   }
   return keyCode;
}


// ---click with mouse (clicar o mouse)---

function playAudio(audioKeyCode){
   const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
   audio.currentTime = 0;
   audio.play()
}

function removePlayingClass(event){
   event.target.classList.remove("playing")
}

keys.forEach(function (key){
   key.addEventListener("click", playNote )
   key.addEventListener("transitionend", removePlayingClass )
})//forEach siginifa para cada 

// ---keyboard type  (clicar no teclado)---
//colocando enventos
window.addEventListener("keydown", playNote) // o keydown serve para que toda vez que focar apertada uma tecla no teclad ele vai rodar uma function


