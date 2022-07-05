import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Container } from './styles';

import arrow from '../../assets/img/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="" srcSet="" />
        <span>Voltar</span>
      </Link>
      <strong>{title}</strong>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
