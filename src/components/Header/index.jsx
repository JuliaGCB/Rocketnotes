import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth"
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
    const { signOut } = useAuth()

    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/JuliaGCB.png" 
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Júlia Campos</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}