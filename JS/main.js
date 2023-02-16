// const fotobanner = document.querySelector("fotob");
// const fotorecomendado = document.querySelector("recomendado");
// const fotodestinos = document.querySelector("img1rec", "img2rec", "img3rec");
// const arrybanner = ["<img src="];

// const arrayviajes = [];



// function nombrefuncion() {

// }


const urlBase = "imagenes";
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {

    const pintarbanner = (/*donde,que*/) => {
        const fotos = document.querySelector("#foto img.imgFluid")
        // otro const foto= getElementById("foto") devuelve un html collection

        const arrayfotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
        const arrayAlts = ["foto1", "foto2", "foto3", "foto4"];

        const indice = Math.floor(Math.random()*arrayfotos.length);

        fotos.src = `${urlBase}/banner/${arrayfotos[indice]}`
        fotos.alt = arrayAlts[indice]

    }

    const pintarrecomendado = () => {

        const recomendados = document.querySelector("#recomendados"); 5

        // array multidimensional

        const arrayCards = [
            ["Viajes1.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
            ["Viajes2.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
            ["Viajes3.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
        ];

        arrayCards.forEach((item/*item, index, array.length*/) => {

            const card = document.createElement("ARTICLE");
            card.classList.add("/*clase css")
            const cardimg = document.createElement("IMG");
            cardimg.src = `${urlBase}/viajes/${item[0]}`
            cardimg.alt = `${urlBase}/viajes/${item[1]}`

            cardimg.classList.add("img-fluid")
            const cardh3 = document.createElement("H2");
            cardh3.textContent = item[1];
            const cardp = document.createElement("P");
            cardp.textContent = item[2];

            card.append(cardimg, cardh3, cardp);


            recomendados.append(card);


            fragment.append(card); // constante arriba

        })

        recomendados.append(card);

    }

    const pintardestinos = () => {

    }

    pintarbanner()

}) //LOAD