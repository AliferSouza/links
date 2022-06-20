import descodificadorUrl from '../lib/resolverUrlParamentro.js'
import componentLink from '../componentes/Links.js'
import ButtonVoltar from '../componentes/nevegarDeVolta.js'

export default function miniSite() {

    const dadosUrl = descodificadorUrl()

    const style = document.querySelector("#styles")
    style.innerHTML = `
    .container-link { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    background:${dadosUrl.Cor}"
}


.logo-link { 
    margin-top: 4rem;
    border: 4px solid rgb(250, 250, 250);
    padding: 4px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
 }


.link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration-line: none;
    padding: 0.4rem;
    background: rgb(52, 117, 236);
    color: rgb(255, 255, 255);
    border-radius: 6px;
    
}

.icone {
    width: 50px;
    padding: 0.5rem;
 }

.footer{
    align-items: center;
 }


   
      
    `





    return `
    <div class="componete-link">  
   
    <div class="container-link">
        ${localStorage.hasOwnProperty("link") ? ButtonVoltar(dadosUrl) : ''

        }
       
   
    <img class="logo"  loading=lazy   style="border-color:${dadosUrl.Cor}"
        src="${dadosUrl.Logo}">
       
    </div>   
    <h1 style="color:${dadosUrl.Cor}" >${dadosUrl.Nome} </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo!</h2>
    <h2>Visite minhas paginas </h2>
       
    ${componentLink(dadosUrl)}
      
    <br>    
    <h1  style=" color:${dadosUrl.Cor}">${dadosUrl.Nome}  </h1>
    </a>
    </div>
    <div>
`;




}