import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { api } from "../../services/api";

import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home (){

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    function handleTagSelected(tagName){
        const alreadySelected = tagsSelected.includes(tagName); //Verificando se o TagName existe na list de tag
        
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
            

        }else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }

        console.log(alreadySelected);
        setTagsSelected(prevState =>[...prevState, tagName]); //Dessa forma consigo selecionar varias tag sem perder a cor delas
    }


    useEffect(() =>{
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
        }


        fetchTags();
    }, []);

    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText  
                        title="Todos" 
                        $isactive={tagsSelected.length === 0}
                        onClick={() => handleTagSelected("all")}
                        />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText  
                                title={tag.name} 
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}//trocando a cor da tag quando selecionada
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>

            <Content>
                <Section title= "Minhas notas">
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id:'1', name:'react'},
                            {id:'2', name:'rocketseat'}
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    );
}