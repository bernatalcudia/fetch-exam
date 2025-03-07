// Examen fetch ONCE - The Bridge
// Bienvenido/a al primer examen del segundo curso, en este caso se trata de JavaScript avanzado y vamos a estar evaluando el uso de fetch.

// Importante: Ya lo hablamos en clase, pero no está permitido el uso inteligencia artificial como ChatGPT, Copilot, Gemini, DeepSeek, etc...

const section = document.getElementById('section');
const inputSearch = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('buttonSearch');

let API_URL_NAME = 'https://restcountries.com/v3.1/name/'






// Para entregar tu solución, debes subirla a un repositorio en GitHub y agregar como colaboradores a nvent97-thebridge y Rotosama para que puedan acceder a tu código.

// Ejercicio 1
// En este ejercicio, debes crear una página web donde los usuarios puedan buscar países y ver sus banderas. Es necesario un input para que el usuario escriba un texto y un boton para hacer la busqueda. Cuando el usuario escriba el nombre de un país y presione el botón, se debe hacer una petición a la API: https://restcountries.com/#rest-countries



// Pista: El endpoint para buscar paises por nombre es el siguiente: https://restcountries.com/v3.1/name/{nombreABuscar}

function searchCountry() {
    section.innerHTML = "";
    section.append(inputSearch, buttonSearch)

    let divFlags = document.createElement('div');



    let inputValue = inputSearch.value;

    fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then(result => (result.json()))
        .then(countries => {

            countries.forEach(countrie => {
                console.log(countrie)
                if (countrie < 0) {
                    for (let index = 0; index < countrie.length; index++) {
                        let flagCountrie = countrie.flags.png
                        let imgFlagFor = document.createElement('img')
                        imgFlagFor.setAttribute('src', flagCountrie);
                        divFlags.appendChild(imgFlagFor);
                        section.appendChild(divFlags);

                    }
                } else {
                    let imgFlag = document.createElement('img');
                    let flagCountrie = countrie.flags.png
                    imgFlag.setAttribute('src', flagCountrie);
                    divFlags.appendChild(imgFlag);
                    section.appendChild(divFlags);
                }

            });


        })
        .catch(error => (console.error(error)))

}

// Resultado final:
// image image

// Nota: No es necesario que la página tenga un diseño bonito, lo importante es que se vea la bandera correctamente.


buttonSearch.addEventListener('click', searchCountry);












// Ejercicio 2
// A continuación, tienes una función en JavaScript que contiene errores. Tu tarea es identificar y explicar los errores: Escribe un comentario en el archivo del ejercicio 1 explicando qué errores encontraste y cómo corregirlos.

const filtrar_por_Nombre = (array, nombre) => {
    var filteredArray = array.filter((x) => x.includes(nombre))
    return filteredArray
}
//Se deberia de devolver el filteredArray


// Buena suerte con el examen! 🙂