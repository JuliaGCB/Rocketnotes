import { useEffect, useState } from "react";
import { Container, Links, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

/***
 * Content foi usado para colocar apenas o conteúdo dentro e fazer a rolagem apenas do conteúdo, deixando o cabeçalho fixo
 */

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();


  function handleBack(){ //fazendo ele voltar sem criar camadas
    navigate(-1);
  }

  async function handleRemove() { // removendo a nota
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`); //acessando a nota pelo Id do usuário
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && ( // se tem conteúdo mostrar o data
        <main>
          <Content>
            <ButtonText 
              onClick={handleRemove}
              title="Excluir nota" 
            />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => ( // target="_blank" abre uma nova guia
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">{link.url}</a> 
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag 
                  key={String(tag.id)} 
                  title={tag.name} />
                ))}
              </Section>
            )}

            <Button 
              title="Voltar" 
              onClick={handleBack} 
            />
          </Content>
        </main>
      )}
    </Container>
  );
}
