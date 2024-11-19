window.onload = () => {
  const pronoun = ["El", "La"];
  const adj = ["gran", "enorme"];
  const noun = ["corredor", "zapatilla"];
  const extensions = [".com", ".net", ".us", ".io", ".es"];
  let allDomains = [];
  let currentIndex = 0;

  // Función para generar todas las combinaciones de dominios usando bucles for
  function generateAllDomains() {
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            // Comprobar si el nombre termina con la extensión
            if (n.endsWith(ext.slice(1))) {
              allDomains.push(`${p}${a}${n.slice(0, -ext.length + 1)}${ext}`);
            } else {
              allDomains.push(`${p}${a}${n}${ext}`);
            }
          }
        }
      }
    }
  }

  // Función para mostrar el siguiente dominio en la lista
  function showNextDomain() {
    if (!allDomains.length) generateAllDomains(); // Generar dominios si no se han creado

    // Crear elemento de lista y añadirlo al DOM
    const nextDomain = allDomains[currentIndex];
    const domainList = document.getElementById("domain-list");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item justify-content-between align-items-center";
    listItem.textContent = nextDomain;
    domainList.appendChild(listItem);

    currentIndex = (currentIndex + 1) % allDomains.length; // Avanzar al siguiente dominio
  }

  // Evento para el botón "Generar dominio"
  document.getElementById("generate-btn").addEventListener("click", showNextDomain);

  // Generar dominios al cargar la página
  generateAllDomains();
};