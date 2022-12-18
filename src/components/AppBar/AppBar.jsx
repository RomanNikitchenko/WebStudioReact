import styled from 'styled-components';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { ContactsNavList } from 'components/ContactsNavList';

const Header = styled.header`
  background-color: var(--text-color-white);
  border-bottom: 1px solid var(--block-border-line);
`;

const ContainerNav = styled.div`
  display: flex;
`;

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <ContainerNav>
          <Navigation />
          <ContactsNavList />
        </ContainerNav>
      </Container>
    </Header>
  );
};
