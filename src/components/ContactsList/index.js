import {
  Card, Container, Header, ListContainer,
} from './styles';

import arrow from '../../assets/img/icons/arrow.svg';
import trash from '../../assets/img/icons/trash.svg';
import edit from '../../assets/img/icons/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="http://">Novo contato</a>
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
