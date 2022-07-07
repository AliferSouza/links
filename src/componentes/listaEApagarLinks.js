export default function listaEApagarLinks(link) {

    const style = document.querySelector("#styles")
    style.innerHTML = `
  
    .cardlinks{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 1rem;
     }

     .buttonRemover{
         padding: 0.5rem;
     }
      
    `




    let componenteLista = '<h1>Lista de Links</h1>'


    window.remover = (id) => {
       alert(id)

    }



    link.forEach((element, index) => {

    

        componenteLista += `
        
    <div class="cardlinks"> 
     
    <h2>
    ${element.Titulo}
    </h2>  
    <button class="buttonRemover" id="${index}" onclick="remover(this.id)">X</button>
    </div>
    `});

    return componenteLista


}