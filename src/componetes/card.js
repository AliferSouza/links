export default function Card(dado, cardlink) {
 document.querySelector('#stylesDinamics').innerHTML = `
 .logo { 
  margin-top: 4rem;
  border: 4px solid ${dado[0].colorButton};
  padding: 4px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  padding: 0.4rem;
  background: ${dado[0].colorButton};
  color: rgb(255, 255, 255);
  border-radius: 6px;
  
}
 
 `


  let card = "";
  dado.forEach((item) => {
    card += `

    <div class="container">
    <img class="logo"
        src="${item.Logo}">
        ${item.Nome}
    </div>     
    <div class="container_Links">
    <span>Seja Bem-vindo!</span>
    <span>Visite minhas paginas </span>
       
    ${cardlink}    


    <br><br>
    <a href="#" class=" link">
    <h1 class="footer">Tecmymos</h1>
    </a>
</div>
`;
  });

  return card;
}
