export default function resolverUrlParamentro() {
    const urlParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(urlParams);


    var AcumuladorDeNumero = []
    var i = 0

    while (i < params.keys) {
        AcumuladorDeNumero.push(i)
        i++
    }
 

    const links = AcumuladorDeNumero.map(key => (
        {
            Titulo: params[`link[${key}][Titulo]`],
            Link: params[`link[${key}][Link]`],
            Image: params[`link[${key}][Imagem]`],
        }

    ))


     const dadosUrlDescodificada = {
        ...params,
        links
    }


    return dadosUrlDescodificada

}