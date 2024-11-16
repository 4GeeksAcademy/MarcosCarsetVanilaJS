window.onload = () => {
  let pronoun = ["El", "La"];
  let adj = ["gran", "enorme"];
  let noun = ["corredor", "zapatilla"];
  let extensions = [".com", ".net", ".us", ".io", ".es"];

  // Arreglo para almacenar todas las combinaciones de dominio
  let allDomains = [];
  let currentIndex = 0;

  // Función para generar todas las combinaciones de dominios usando map y template literals
  function generateAllDomains() {
    allDomains = pronoun.reduce((result, p) => {
      let pronounCombinations = adj.reduce((adjResult, a) => {
        let adjCombinations = noun.reduce((nounResult, n) => {
          let nounCombinations = extensions.map((ext) => {
            // Usamos un template literal directamente aquí
            return n.endsWith(ext.slice(1))
              ? `${p}${a}${n.slice(0, -ext.length + 1)}${ext}`
              : `${p}${a}${n}${ext}`;
          });
          return nounResult.concat(nounCombinations);
        }, []);
        return adjResult.concat(adjCombinations);
      }, []);
      return result.concat(pronounCombinations);
    }, []);
  }

  // Función para mostrar el siguiente dominio en la lista
  function showNextDomain() {
    // Si no se han generado los dominios aún, llamamos a la función de generación
    if (allDomains.length === 0) {
      generateAllDomains();
    }

    // Obtener el siguiente dominio basado en el índice
    let nextDomain = allDomains[currentIndex];

    // Crear y añadir un elemento de lista al DOM
    let domainList = document.getElementById("domainList");
    let listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "justify-content-between",
      "align-items-center"
    );

    // Asignar el dominio generado como contenido del elemento
    listItem.textContent = nextDomain;

    // Añadir el elemento de lista al DOM
    domainList.appendChild(listItem);

    // Actualizar el índice para el siguiente clic
    currentIndex = (currentIndex + 1) % allDomains.length; // Volver al inicio si llegamos al final
  }

  // Agregar evento al botón para mostrar el siguiente dominio al hacer clic
  document
    .getElementById("generateBtn")
    .addEventListener("click", showNextDomain);

  // Generar dominios al inicio
  generateAllDomains();
};