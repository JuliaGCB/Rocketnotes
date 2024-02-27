import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/JuliaGCB.png" 
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Júlia Campos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}