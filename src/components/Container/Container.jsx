import styled from 'styled-components';

const Conteiner = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Container = ({ children }) => {
  return <Conteiner>{children}</Conteiner>;
};
