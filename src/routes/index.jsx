import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

/**
 * Essa pagina é para fazer o contre das rotas do app e dos registros
 * por aqui que eu controlo qual rota deve aparecer de acordo se o usuario esta logado ou não
 * 
 * Criar a navegação
 * 
 * 
 * {user ? <AppRoutes/> : <AuthRoutes/>} // se existe conteudo no user mostrar AppRoutes se não mostrar AuthRoutes
 */

export function Routes(){
    const { user } = useAuth();


    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}