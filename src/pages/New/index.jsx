import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {Header} from '../../components/Header';
import {Input } from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import {ButtonText} from '../../components/ButtonText';

import { api } from "../../services/api";

import { Container, Form } from './style';

export function New(){

    const [title, setTitle] = useState(""); // Titulo
    const [description, setDescription] = useState("");//Description


    const [links, setLinks] = useState([]); //Atualizando os links
    const [newLink, setNewLink] = useState(""); //estados dos links

    const [tags, setTags] = useState([]); //estados das tags
    const [newTag, setNewTag] = useState(""); //Atualizando as tags

    const navigate = useNavigate();

    function handleBack(){ //fazendo ele voltar sem criar camadas
        navigate(-1);
    }


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]); //prevState eu acesso oq tinha antes e depois eu monto um novo array com o novo link
        setNewLink("");
    }

    function handleRemoveLink(deleted){ //deletando o link
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); //Adicionando as tags ou marcadores
        setNewTag(""); //deixando o campo em branco quando terminar de add a tag
    }

    function handleRemoveTag(deleted){ //Deletando as tags
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){ //Criando a nota e mandando ela para o backend

        if(!title){
            return alert("Digite o título da nota")
        }

        if(newLink){
            return alert("Ops, você deixou um Link para trás, volte e adicione ela ou deixe o campo vazio!")
        }

        if(newTag){
            return alert("Ops, você deixou uma tag para trás, volte e adicione ela ou deixe o campo vazio!")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        navigate(-1);
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText 
                            title="Voltar" 
                            onClick={handleBack}
                        />
                    </header>

                    <Input 
                        placeholder="Título"
                        onChange={ e => setTitle(e.target.value)}
                    />

                    <Textarea 
                        placeholder="Observações" 
                        onChange={ e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => ( //Mosntrando os links que forem adicionados
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem  //criando os link novos
                            $isNew
                            placeholder="Novo Link" 
                            value={newLink}
                            onChange = {e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section> 

                    <Section title="Marcadores">   
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={()=> handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                $isNew 
                                placeholder="Nova Tag"
                                onChange ={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button 
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}