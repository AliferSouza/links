export default function cardLinks(dado, cardlink) {
  let cardLink = "";  

   dado.forEach((link)=>{
    let linksFiltrados = link.links 
    linksFiltrados.forEach((exibirIcones)=>{  
      cardLink += `    
   
      <a href="${exibirIcones.LinkUrl}" style="background:${link.colorButton}" class="link" target="_blank">
          <img class="icone"
              src="${exibirIcones.imgUrl}">
          <h1>${exibirIcones.Nome}</h1>
      </a>      
  `;
      
    })
      
  })    

  
    return cardLink;
  }
  