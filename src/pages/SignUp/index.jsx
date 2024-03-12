import { Container, Form, Background } from './style';

import { Link } from 'react-router-dom';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {FiUser ,FiMail, FiLock } from 'react-icons/fi';

/**
 * <Link/> do react dom não vai mudar em nada a principio mas ele já facilita para fazer a navegaçção entre as paginas
 * è com esse link que eu vou voltar para o login e ir para criar conta
 */

export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar e salvar seus link s úteis</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"  
                    type="text"
                    icon ={FiUser}
                />
                <Input
                    placeholder="E-mail"  
                    type="text"
                    icon ={FiMail}
                />
                <Input
                    placeholder="Senha"  
                    type="password"
                    icon ={FiLock}
                />
                <Button title="Cadastrar" />

                <Link to="/">Voltar para o login</Link>                
            </Form>
            
        </Container>
    );
}