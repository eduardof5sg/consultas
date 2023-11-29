

 // Función para obtener la bandera
 async function obtenerBandera() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/region/europe');
    const data = await response.json();
    const pais = data[Math.floor(Math.random() * data.length)];
    console.log(pais);
    
    
    // Obtener la URL de la bandera
    const banderaUrl = pais.flags.png;
    const nombrePais = pais.name.common;
    const poblacion = pais.population;
    const capital = pais.capital;
    console.log(capital);
    
    
    
    var banderaImg = document.getElementById("banderaImg"); 
    var paisNombre = document.getElementById("nombrePais");
    let totalpoblacion= document.getElementById("pobla");
    let capitalPais = document.getElementById("capital");
    

    

    banderaImg.src = banderaUrl; // Establecer la URL de la imagen en el modal
    paisNombre.textContent = nombrePais; // Mostrar el nombre del país en el modal
    totalpoblacion.innerText = poblacion.toLocaleString() + " habitantes"; 
    capitalPais.innerText = capital;

  
   
  } catch (error) {
    console.error('Error al obtener el país:', error);
  }
} 

