import voltarLinks from '../pages/criarLinks.js'

export default function navegarDeVolta(dadosUrl){
    const link = JSON.parse(localStorage.getItem('link') || "[]")

    const style =   document.querySelector("#styles")
    style.innerHTML = `
  
    .navegarDeVoltaButton{  
        position: relative;
        font-size:2rem;
        top: -200px;
        left: -5rem;
        border: none;
        background-color: #fff;
        color: ${dadosUrl.Cor} 
        cursor: pointer;  
        background-color: Transparent;
     }
      
    `

    window.routertMiniSite = () => {
        window.history.back()
    }


    return`
    <button onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `
  
}