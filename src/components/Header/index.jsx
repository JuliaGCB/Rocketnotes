import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth"
import {api} from "../../services/api";
import { RiShutDownLine } from 'react-icons/ri'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header(){
    const { signOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSignOut(){ //Arrumando o erro de sair da aplicação estando dentro da Nota
    // Quando clicava para sair estando dentro da nota, a aplicação não voltava para a página home e ficava toda preta
        navigation("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src={avatarUrl}
                    alt={user.name}
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}