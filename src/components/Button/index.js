
import { ButtonContainer } from './styles';

const Button = ({label, onClick, variant='primary', color='primary'}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" variant={variant} color={color}>
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;