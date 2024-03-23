import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from './style';
/**
 * <Link/> do react dom não vai mudar em nada a principio mas ele já facilita para fazer a navegaçção entre as paginas
 * è com esse link que eu vou voltar para o login e ir para criar conta
 */
export function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar e salvar seus link s úteis</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"  
                    type="text"
                    icon ={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"  
                    type="password"
                    icon ={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar conta
                </Link>                
            </Form>
            <Background/>
        </Container>
    );
}