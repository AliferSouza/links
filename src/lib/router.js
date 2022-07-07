import RenderRouter from './renderRouter.js'

function router(prop) {
    const path = window.location.pathname
    const key = Object.keys(prop) 
  
     

    if (prop.URL) {
        var rendeComponente = prop.Site
    } else if (localStorage.hasOwnProperty("miniSite")) {
        var rendeComponente = prop.criarLinks
    } else if (localStorage.hasOwnProperty("link")) {
        var rendeComponente = prop.criarIndetidade
    }else{
         var rendeComponente =  prop.criarIndetidade
    }


    RenderRouter(rendeComponente)
}







export { router }