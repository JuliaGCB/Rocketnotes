import { Container } from "./styles";

export function Button({title, loading = false, ...rest}){ //desestruturei o props e peguei direto o title
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest} // Para colocar os componentes que eu crei mas que não coloquei aqui, ele ira puxar da mesma forma
        >
            { loading ? 'Carregando...' : title}
        </Container>
    );
}