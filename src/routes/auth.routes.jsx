import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

/**
 * O react routes é quem faz essa parte das rotas
 * Ja esta pagina é para as paginas de login e criação de conta. são rotas diferentes
 * o react routes ira acha as paginas de acordo com os imports e tbm com os componentes ex: <Home />
 * e vai mandar para o main que ia pegar todo o conteúdo da pasta routes
 * e essa função estou enviando para o index das rotas que ira ser processado no main e mostrado no navegador
 *
 * a Ultima rota é para voltar o usuário para a pagina de SingIn, para não ficar indo para url que não tem
 */
export function AuthRoutes() {
  const user = localStorage.getItem("@rocketnotes:user");

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      { !user && <Route path="*" element={<Navigate to="/" />} />}
      
    </Routes>
  );
}
