import { router } from './lib/router.js'
import criarIndetidade from './pages/criarIndetidade.js'
import criarLinks from './pages/criarLinks.js'
import Site from './pages/miniSite.js'
import Sobre from './pages/Sobre.js'

const URL = location.href.includes("?") 

export default function App(){     
    router(
        { 
        "URL": URL,    
        "criarIndetidade":criarIndetidade,
        "criarLinks":criarLinks,
        "Site":Site,
        "Sobre":Sobre})      
}

