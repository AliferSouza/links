import Site from '../pages/miniSite.js'
import cadastro from '../pages/criarIndetidade.js'
import listarLinks from '../componentes/listaEApagarLinks.js'
import objectToQueryString from'../lib/objectToQueryString.js'
var urlNavegador = location.href


export default function cadastroSegundario() {
  const miniSite = JSON.parse(localStorage.getItem('miniSite') || "[]")
  const link = JSON.parse(localStorage.getItem('link') || "[]")
  const style =   document.querySelector("#styles")
  style.innerHTML = `

  .form .title::before{
    background-color: ${miniSite.Cor};
   }
    
  `


 
    //Passar quantos intes tem no banco de dados local
    const keys = Object.keys(link).length  


    window.onload = function autoLink() {

        const resultadoIndetidadeLinks = {
            ...miniSite,
            link: [...link],
            keys
        }

       const urlCodificada = objectToQueryString(resultadoIndetidadeLinks)
    
      
        document.querySelector(".text-copiado-input").value = `${urlNavegador}?${urlCodificada}`
                
        window.visitar = () => {   
            
           
            window.location.href = `${urlNavegador}?${urlCodificada}`     
        }

    }

    window.rederFuct = () => {
   
        const optionMenu = document.querySelector(".select-menu"),
            selectBtn = optionMenu.querySelector(".select-btn"),
            selectImg = optionMenu.querySelector(".imgSelect"),
            options = optionMenu.querySelectorAll(".option"),
            sBtn_text = optionMenu.querySelector(".sBtn-text")
       
            console.log(selectBtn)

        selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

        options.forEach(option => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(".option-text").innerText;               
                let selectedImg = option.querySelector(".simg").src     
                  
                        
                            
                sBtn_text.innerText =  selectedOption;
                selectImg.innerText =  selectedImg;
                                   
                optionMenu.classList.remove("active");
                

            });
         
        });
    }



    window.salvarlink = () => {     
        let pegarValorDoCampoSelecao = document.querySelector(".sBtn-text").innerText;    
        let campoUrl = document.querySelector(".imagemProduto").value;
        let imgLink = document.querySelector(".imgSelect").innerText;
      

  
     
        let produtoCompleto = {
            "Titulo": `${pegarValorDoCampoSelecao}`,
            "Imagem": `${imgLink}`,
            "Link": `${campoUrl}`

        }


        link.push(produtoCompleto)
        localStorage.setItem('link', JSON.stringify(link))
        window.location.reload()

    }
 

    window.copy = () => {
        document.getElementById("text-1").select();
        document.execCommand("copy");
    };


    window.routertEditarPerfil = () => {
        document.querySelector("#root").innerHTML = cadastro()
    }

    window.routertEditarLink = () => {
        document.querySelector("#root").innerHTML = listarLinks(link)
    }

  


     return `
    <div class="form signup">
    <span class="title" style="be" >Criar Link's</span>

    <form action="#">     

        <div class="select-menu" >
        <span class="imgSelect"> ... </span>
            <div class="select-btn" style="border:${miniSite.Cor}" onclick="rederFuct()">                
                <span class="sBtn-text">Selecione o icone</span>            
            </div>
    
            <ul class="options">
                <li class="option">
                   <img src="./src/img/facebook.png" class="simg" alt="facebook" height="40px" >
                    <span class="option-text">Facebook</span>
                </li>
                <li class="option">
                    <img src="./src/img/instagram.png" class="simg" alt="instagram" height="40px" >
                    <span class="option-text">Instagram</span>
                </li>
                <li class="option">
                    <img src="./src/img/whatsapp.png" class="simg" alt="whatsapp" height="40px" >
                    <span class="option-text">Whatsapp</span>
                </li>
                <li class="option">
                    <img src="./src/img/youtube.png" class="simg" alt="youtube" height="40px" >
                    <span class="option-text">Youtube</span>
                </li>
                <li class="option">
                    <img src="./src/img/linkedin.png" class="simg" alt="linkedin" height="40px" >
                    <span class="option-text">Linkedin</span>
                </li>
            </ul>
        </div>

        <div class="input-field">
            <input type="text" class="imagemProduto" placeholder="URL correspondente a sele..." required>
    
        </div>
     
                   
       <div class="renderUrl">
           <input class="text-copiado-input" id="text-1" typy="text">
           <button onclick="copy()" class="copiarBotton" style="background:${miniSite.Cor}">&#128203</button>
           <button onclick="visitar()" class="copiarBotton" style=" color:#fff; background:${miniSite.Cor}">&#10140;</button>
       </div>
           
        <div class="input-field button">
            <input type="button" style="background:${miniSite.Cor}" value="Adicionar" onclick="salvarlink()">                        
        </div>

        <div class="login-signup">
        <span class="text">Indetidade:
            <button  style="background: #fff; color: ${miniSite.Cor}; border: none; cursor: pointer;  "  onclick="routertEditarPerfil()" class="indetidadedominisite">Editar</button>
        </span>
         <br/>
        <span class="text">Link:
            <button style="background: #fff; color: ${miniSite.Cor}; border: none;  cursor: pointer;  " onclick="routertEditarLink()" class="indetidadedominisite">Editar</button>
        </span>
        
        
    </div>
      
    </form>
   
</div>
    `
}