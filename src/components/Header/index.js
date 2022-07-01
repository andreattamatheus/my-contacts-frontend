import { Container, InputSearchContainer } from './styles';
import logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" srcSet="" width={200} />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
    </Container>
  );
}
