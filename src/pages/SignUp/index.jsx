import { useState } from 'react';
import {FiUser ,FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import { Container, Form, Background } from './style';

/**
 * 
 * <Link/> do react dom não vai mudar em nada a principio mas ele já facilita para fazer a navegaçção entre as paginas
 * è com esse link que eu vou voltar para o login e ir para criar conta
 */

export function SignUp(){
    const [name, setName] = useState(""); // useState("") = valor inicial vazio
    const [email, setEmail] = useState(""); // useState("") = valor inicial vazio
    const [password, setPassword] = useState(""); // useState("") = valor inicial vazio

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
          return alert("Preencha todos os campos");
        }

        api.post("/users", {name, email, password})
        .then(() =>{
            alert("Usuario cadastrado com sucesso");
            navigate("/")
        })
        .catch( error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel cadastrar");
            }
        });
    }

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
                    onChange={e => setName(e.target.value)} //pegando o valor que eu digitar e guardar
                />
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
                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/">Voltar para o login</Link>                
            </Form>
            
        </Container>
    );
}