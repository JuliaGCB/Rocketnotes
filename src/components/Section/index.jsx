import { Container } from './style'

export function Section({ title, children }){ // children é filho
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    );
}