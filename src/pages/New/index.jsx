import {Header} from '../../components/Header';
import { Link } from 'react-router-dom';
import {Input } from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';

import { Container, Form } from './style';



export function New(){
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
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem $isNew placeholder="Novo Link" />
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