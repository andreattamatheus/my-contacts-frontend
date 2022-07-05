import styled from 'styled-components';

export const Overlay = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  border-radius: 4px;
  padding: 24px;

  h1 {
    margin-bottom: 8px;
    font-size: 22px;
    color: red;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-bottom: 32px;
  }


`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .cancel-button {
    background: none;
    border: none;
    margin-right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]}
  }

`;
