import cadastroSegundario from '../componentes/cadastroSegundario.js'

export default function criarLink() {  
   
    return `
    <div class="container">
    <div class="forms">
    ${cadastroSegundario()}

    </div>
    </div>
    `

}