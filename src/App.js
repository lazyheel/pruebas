import React, { useState } from 'react';
 
function App() {
 const [showText, setShowText] = useState(false);

 var estado = prompt("Hola retra: ")
 alert("Alert!");

 return (
   <div>
     <button
       type="button"
       onClick={() => setShowText(true)}
     >
       Mostrar Texto
     </button>
     <button
       type="button"
       onClick={() => setShowText(false)}
     >
      Eliminar Texto
     </button>
     {
       showText && "¡Se muestra el texto!"
     }
   </div>
 );
 
}
 
export default App;