export default function Card(dado, cardlink) {
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
