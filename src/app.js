import Card from "./componetes/card.js"
import CardLinks from "./componetes/cardLinks.js"
import Api from "./api/api.js"
let dados = await Api();
var URL = location.href
var [url1, url2] = location.href.split("?")

let compararUrlEApi = dados.filter((item) => {
  return (item.Id === url2)
})


const cardLinks = CardLinks(compararUrlEApi)

const CardProfile = document.querySelector('.card')


export default function App() {  
if(url2 === undefined){ 
  alert("Por favor, selecione um perfil")
}
else{ 
  CardProfile.innerHTML = Card(dados, cardLinks)
}

}