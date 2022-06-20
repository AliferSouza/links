
export default function Links(links) {
    const dados = links.links
    let cardLink = "";
    dados.forEach((link) => {
        cardLink += `       
        <a href="${link.Link}" class="link" style="background:${links.Cor}" target="_blank">
            <img class="icone"
                src="${link.Image}">
            <h1>${link.Titulo}</h1>
        </a>      
        `;
    })
    return cardLink

}

