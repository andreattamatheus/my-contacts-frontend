import { Link } from 'react-router-dom';

import { useEffect, useState, useMemo } from 'react';

import {
  Card, Container, Header, InputSearchContainer, ListHeader,
} from './styles';

import arrow from '../../assets/img/icons/arrow.svg';
import trash from '../../assets/img/icons/trash.svg';
import edit from '../../assets/img/icons/edit.svg';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import delay from '../../utils/delay';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContatcs = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        await delay(2000);
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('erro', error);
      })
      .finally(() => { setIsLoading(false); });
  }, [orderBy]);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleSearchTerm}
        />
      </InputSearchContainer>

      {/* <Modal danger /> */}
      <Loader isLoading={isLoading} />

      <Header>
        <strong>
          {filteredContatcs.length}
          {filteredContatcs.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">
          Novo contato
        </Link>
      </Header>

      {filteredContatcs.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="" srcSet="" />
          </button>
        </ListHeader>
      )}

      {filteredContatcs.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (<small>{contact.category_name}</small>)}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <a href={`edit/${contact.id}`}>
              <img src={edit} alt="" srcSet="" />
            </a>
            <button type="button">
              <img src={trash} alt="" srcSet="" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
