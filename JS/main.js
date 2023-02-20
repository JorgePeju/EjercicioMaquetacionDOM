// const fotobanner = document.querySelector("fotob");
// const fotorecomendado = document.querySelector("recomendado");
// const fotodestinos = document.querySelector("img1rec", "img2rec", "img3rec");
// const arrybanner = ["<img src="];

// const arrayviajes = [];

document.addEventListener("DOMContentLoaded", () => {


    pintarBanner();
    pintarRecomendado();
// pintarDestinos();

    const bloque = document.getElementById("bloque");

    cardImg.addEventListener("click", () => {
    bloque.style.display = "block";
});

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
    }

    const pintardestinos = () => {

    }


    // VARIABLES

    
    const lista= document.querySelector ("#lista");
    const boton= document.querySelector ("#boton");



    const arrayFotos = [
        {
            id: "a1",
            nombre: "nombre1"
        },
         {
            id: "a2",
            nombre: "nombre2"
        },
        {
            id: "a3",
            nombre: "nombre3"
        },
        {
            id: "a4",
            nombre: "nombre4"
        }
    
    ];
        // EVENTOS


        const arrayProductos = JSON.parse(localStorage.getItem("arrayCompra")) || []
        boton.addEventListener("click", ()=>{
                // Lo ponemos e una función flecha por que es una funcion expresada
            pintarEnLista()
        })

        //lista.addEventListener("click",(ev)=>{  // ev da la propiedad de target (ev.target) y se podría desesctructurar poniendo {target}
        lista.addEventListener("click",({target})=>{ 
           if(target.matches("li")){
            const id=target.id
            mostrarElemento()
           }
        })


        //FUNCIONES
    const pintarEnLista= ()=>{
        arrayFotos.forEach(({id,nombre})=>{
        lista.innerHTML+= `<li id=${id}>${nombre}</li>`
    })
            // += si no se sobreescribiría el último ID (osea el 4)
        
    };


    const mostrarElemento =()=>{
        alert(id)
    }


document.addEventListener("click",({target})=>{

    if(eval.target.matches("botonAdd")){
       // const elemento =ev.target.parentElement.children[0].id

       const id=ev.target.getAttribute("data-id")
        addLocal()
    }
})

   
const eliminarDelLocal =(id)=>{
    const nuevoArray = arrayCompra.filter((item)=>item.id!=id)

    // este nuevo array va al local storage
    montarLocal(nuevoArray)
 }

const addLocal=()=>{


}

const montarLocal=(nuevoArray)=>{
    localStorage.setItem("cosa",JSON.stringify(nuevoArray))
}