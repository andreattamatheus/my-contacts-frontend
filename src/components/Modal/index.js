import PropTypes from 'prop-types';

import Button from '../Button';
import { Container, Footer, Overlay } from './styles';

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Teste</h1>
        <p>Texto do corpo</p>
        <Footer>
          <button className="cancel-button" type="submit">Cancelar</button>
          <Button type="submit" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
