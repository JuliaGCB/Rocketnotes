import { Container } from './styles'
import { Button } from '../../components/Button'

export function Details(){

  return(
    <Container>
      <h1>Hello Word</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, officia iusto. Fuga tempora autem, dignissimos ab vel doloremque sequi tempore laboriosam hic illum. Nisi minus nulla rerum esse, exercitationem illum.</p>

      <Button title="Entrar" loading/>
      <Button title=" Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}