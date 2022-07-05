import { Link } from 'react-router-dom';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/img/icons/arrow.svg';
import trash from '../../assets/img/icons/trash.svg';
import edit from '../../assets/img/icons/edit.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Modal danger />

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">
          Novo contato
        </Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="" srcSet="" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Andreatta</strong>
              <small>LinkedIn</small>
            </div>
            <span>contato@matheusandreatta.com.br</span>
            <span>(27)99639-7187</span>
          </div>
          <div className="actions">
            <a href="http://">
              <img src={edit} alt="" srcSet="" />
            </a>
            <button type="button">
              <img src={trash} alt="" srcSet="" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Matheus Andreatta</strong>
              <small>LinkedIn</small>
            </div>
            <span>contato@matheusandreatta.com.br</span>
            <span>(27)99639-7187</span>
          </div>
          <div className="actions">
            <a href="http://">
              <img src={edit} alt="" srcSet="" />
            </a>
            <button type="button">
              <img src={trash} alt="" srcSet="" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
