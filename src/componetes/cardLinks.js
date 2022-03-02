export default function cardLinks(dado) {
  let cardLink = "";
  
  dado.forEach((link)=>{
    let linksFiltrados = link.links 
    linksFiltrados.forEach((exibirIcones)=>{
      cardLink += `    
   
      <a href="${exibirIcones.LinkUrl}" class="link" target="_blank">
          <img class="icone"
              src="${exibirIcones.imgUrl}">
          <h1>${exibirIcones.Nome}</h1>
      </a>      
  `;
      
    })
      
  })    

  
    return cardLink;
  }
  