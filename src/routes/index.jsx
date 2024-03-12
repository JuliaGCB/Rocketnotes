import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

/**
 * Essa pagina é para fazer o contre das rotas do app e dos registros
 * por aqui que eu controlo qual rota deve aparecer de acordo se o usuario esta logado ou não
 * 
 * Criar a navegação
 * 
 */

export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
}