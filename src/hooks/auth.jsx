import { createContext, useContext, useState, useEffect } from "react";
/**
 
 * Criando o Contexto
 * Dentro da chabe do createContext vai ser definido um valor padrão
 * Usando o Contexto para centralizar os dados do usuário em um lugar que é o contexto de autenticacion
 *  Centalizando todos os Hooks e contextos em um unico arquivo, para não ficar espalhado
 */
import { api } from  "../services/api";
export const AuthContext = createContext({});

//componete filho children que vai ser depois as rotas da aplicação // // Todas as rotas da aplicação estão sendo recebidas aqui com o children
function AuthProvider({ children }) { 

    const [data, setData] = useState({});

    async function signIn({ email, password }){ //deixando em { } para que ele possa receber os parametros independende da ordem // Vai ser enviado para a parte de SignIn e pegar os dados para ser autenticado

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data; //deixando separado os dados do usuario e o token

            localStorage.getItem("@rocketnotes:user", JSON.stringify(user)); //gaurdando o usuario e transformanto em string
            localStorage.getItem("@rocketnotes:token", token);

            api.defaults.headers.common["Authorization"] = `Bearer ${token}` //inserindo um token do tipo Bearer de autorização no header por padrão de todas as requisisões
            setData({user, token});

        } catch(error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel entrar");
            }
        }
        
    }

    function signOut(){ //Removendo os dados do localStorage e fazendo o usuario voltar para a pagina de login, essa função foi colocada no Header
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});
    }

    async function updateProfile({user, avatarFile}){
        try {

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Atualizado com sucesso")

        } catch(error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel atualizar o perfil");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token, 
                user: JSON.parse(user) //voltando para o tipo JSON
            });
        }
    }, []);


    return(
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            user: data.user,
            updateProfile
        }}
        > 
            {children} 
        </AuthContext.Provider>
    )
} 

function useAuth() { //Aqui eu vou usar na pagina SignIn
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };