import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth"

import {api} from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './style';

export function Profile(){
    const { user, updateProfile } = useAuth();
    //Atualizando os campos do perfil
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl); //se o user já tiver um avatar
    const [avatarFile, setAvatarFile] = useState(null); //usando o avatarFile para carregar a imagem

    async function handleUpdate(){
        const user ={
            name,
            email,
            password: passwordNew,
            old_password: passwordOld

        }

        await updateProfile({user, avatarFile})
    }

    function handleChangeAvatar(event) { //Fazendo a alteração do avatar
        const file = event.target.files[0]; 
        setAvatarFile(file);

        const imagemPreview = URL.createObjectURL(file);
        setAvatar(imagemPreview);
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário" 
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input 
                            id='avatar'
                            type='file'
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"  
                    type="text"
                    icon = {FiUser}
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />
                <Input
                    placeholder= "E-mail"  
                    type= "text"
                    icon = {FiMail}
                    value= {email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <Input
                    placeholder= "Senha Atual"  
                    type= "password"
                    icon = {FiLock}
                    onChange = {e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder= "Nova senha"  
                    type= "password"
                    icon = {FiLock}
                    onChange = {e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick ={handleUpdate}/>
            </Form>
        </Container>
    );
}