import { Routes, Route } from "react-router-dom";

import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';

/**
 * O react routes é quem faz essa parte das rotas
 * Ja esta pagina é para as paginas de login e criação de conta. são rotas diferentes
 * o react routes ira acha as paginas de acordo com os imports e tbm com os componentes ex: <Home />
 * e vai mandar para o main que ia pegar todo o conteudo da pasta routes
 * e essa função estou enviando para o index das rotas que ira ser processado no main e mostrado no navegador
 */
export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
        </Routes>
    )
}