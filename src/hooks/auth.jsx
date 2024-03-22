import { createContext, useContext } from "react";
/**
 * Criando o Contexto
 * Dentro da chabe do createContext vai ser definido um valor padrão
 * Usando o Contexto para centralizar os dados do usuário em um lugar que é o contexto de autenticacion
 *  Centalizando todos os Hooks e contextos em um unico arquivo, para não ficar espalhado
 */
export const AuthContext = createContext({});

function AuthProvider({ children }) { //componete filho children que vai ser depois as rotas da aplicação // // Todas as rotas da aplicação estão sendo recebidas aqui com o children
    return(
        <AuthContext.Provider value={{name: ' Campos',email: 'julia@email.com'}}> 
            {children} 
        </AuthContext.Provider>
    )
} 

function useAuth() { //Aqui eu vou usar na pagina SignIn
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };