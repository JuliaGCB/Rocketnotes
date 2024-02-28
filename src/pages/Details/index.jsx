import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

/***
 * Content foi usado para colocar apenas o conteudo dentro e fazer a rolagem apenas do conteudo, deixando o cabeçalho fixo
 */

export function Details(){

  return(
    <Container>
      <Header />

      <main>
        <Content> 

        <ButtonText title="Excluir nota"/>

        <h1>Introdução ao React</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Enim quia a necessitatibus in aut quae impedit nisi rem delectus, 
          itaque quas numquam repellendus, consectetur pariatur omnis fuga 
          odit, est corrupti.
        </p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
            <li><a href="#">https://www.rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>
        </Section>

        <Button title="Voltar"/>
       </Content>
      </main>
    </Container>
  )
}