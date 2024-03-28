import { useState } from 'react';

import {Header} from '../../components/Header';
import { Link } from 'react-router-dom';
import {Input } from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';

import { Container, Form } from './style';



export function New(){

    const [links, setLinks] = useState([]); //Atualizando os links
    const [newLink, setNewLink] = useState(""); //estados dos links

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]); //prevState eu acesso oq tinha antes e depois eu monto um novo array com o novo link
        setNewLink("");
    }

    function handleRemoveLink(deleted){ //deletando o link
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações" />

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
                            <NoteItem value="react" />
                            <NoteItem value="node.js" />
                            <NoteItem $isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}