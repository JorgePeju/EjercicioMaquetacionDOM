// const fotobanner = document.querySelector("fotob");
// const fotorecomendado = document.querySelector("recomendado");
// const fotodestinos = document.querySelector("img1rec", "img2rec", "img3rec");
// const arrybanner = ["<img src="];

// const arrayviajes = [];

document.addEventListener("DOMContentLoaded", () => {


    pintarBanner();
    pintarRecomendado();

}) //LOAD



const urlBase = "/Imagenes";
 //const fragment = document.createDocumentFragment();


    const pintarBanner = () => {
        const fotos = document.querySelector("#fotobanner .banner")
        console.log(fotos)
        const arrayFotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
        const arrayAlts = ["foto1", "foto2", "foto3", "foto4"];

        //const indice = Math.floor(Math.random()*arrayFotos.length);

        fotos.src = `${urlBase}/banner/${arrayFotos[0]}`
        fotos.alt = arrayAlts[0]

    }

    
    const pintarRecomendado = () => {

        const recomendados = document.querySelector("#fotorecom");

        // array multidimensional

        const arrayCards = [
            ["viajes-1.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
            ["viajes-2.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
            ["viajes-3.jpg", "viaje uno", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum, corrupti, doloremque officia inventore architecto odit error eveniet nisi asperiores doloribus magnam tempora consequatur itaque ipsum dolores fugit, laborum commodi"],
        ];

        arrayCards.forEach((item) => {
             // item, index, array.length
            const card = document.createElement("ARTICLE");
            card.classList.add("#fotorecom")
            const cardImg = document.createElement("IMG");
            cardImg.src = `${urlBase}/viajes/${item[0]}`
            cardImg.alt = `${urlBase}/viajes/${item[1]}`

            cardImg.classList.add("#fotorecom")
            const cardh3 = document.createElement("H2");
            cardh3.textContent = item[1];
            const cardp = document.createElement("P");
            cardp.textContent = item[2];

            card.append(cardImg, cardh3, cardp);


            recomendados.append(card);

           // fragment.append(card); // constante arriba
           

        })

        recomendados.append(card);
        const bloque = document.getElementById("bloque");

        cardImg.addEventListener("click", () => {
        bloque.style.display = "block";
});
    }

    const pintardestinos = () => {

    }


    