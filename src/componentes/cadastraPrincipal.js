export default function cadastraPrincipal() {
       window.salvarLoja = () => {
        const Nome = document.querySelector(".Name").value
        const Logo = document.querySelector(".Logo").value
        const Cor = document.querySelector(".Cor").value


        if (!Nome || !Logo || !Cor) {
            alert("Valores obrigatorios para todos os campos")
        } else {          
            const miniSite = {
                            Nome,
                            Logo,
                            Cor
                         }

            localStorage.setItem('miniSite', JSON.stringify(miniSite))
            window.location.reload()
        }
    }

    return `    
    <div class="form login">
    <span class="title">Crie seu mini MINI-SITE</span>

    <form action="#">
        <div class="input-field">
            <input type="text" class="Name" placeholder="Digite o nome" required>
        </div>

        <div class="input-field">
            <input type="text" class="Logo" placeholder="URL da logo" required>                          
        </div>   

        <div class="input-field">
            <input type="text" class="Cor" placeholder="Cor Predominante Hexadecimal " required>      
        </div>                

        <div class="input-field button">
            <input type="button" value="Salvar" onclick="salvarLoja()">
        </div>
    </form>    

</div>
    `

}