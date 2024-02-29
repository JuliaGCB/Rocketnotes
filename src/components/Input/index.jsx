import { Container} from './style'

export function Input({icon: Icon, ...rest}){ // {Icon && <Icon size={20} />}  so vai receber o icon se tiver a propriedade icon no componente
    return(
        <Container>
            {Icon && <Icon size={20} />} 
            <input {...rest} />
        </Container>
    );
}