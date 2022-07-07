import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

import { Container, Footer, Overlay } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
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
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
