import styled from 'styled-components';

export const Container = styled.header`

  margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      margin-right: 8px;
      transform: rotate(-0.25turn);
    }
    span {
      font-weight:bold;
      margin-left: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  strong{
    font-size: 24px;
  }
`;
