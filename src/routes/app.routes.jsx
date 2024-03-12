import { Routes, Route } from "react-router-dom";

import {New} from '../pages/New';
import {Home} from '../pages/Home';
import {Details} from '../pages/Details';
import {Profile} from '../pages/Profile';
/**
 * Essa pagina é das minhas rotas que vao para essas paginas aqui em baixo
 * o react routes acha as paginas de acordo com os imports e tbm com os componentes ex: <Home />
 * e vai mandar para o main que ia pegar todo o conteudo da pasta routes
 * e essa função estou enviando para o index das rotas que ira ser processado no main e mostrado no navegador
 * com essas rotas e os <Routes /> eu consigo pegar todos os componentes e estilos já criados
 */
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/details/:id" element={<Details/>} />
        </Routes>
    )
}