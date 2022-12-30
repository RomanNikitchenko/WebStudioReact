import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { ContactsNavList } from 'components/ContactsNavList';
import { useMediaQuery } from '@react-hook/media-query';

const Header = styled.header`
  background-color: var(--text-color-white);
  border-bottom: 1px solid var(--block-border-line);
`;

const ContainerNav = styled.div`
  display: flex;
`;

export const AppBar = () => {
  const isDesktopAndTablet = useMediaQuery(
    'only screen and (min-width: 768px)'
  );

  return (
    <>
      <Header>
        <Container>
          <ContainerNav>
            <Navigation />
            {isDesktopAndTablet && <ContactsNavList />}
          </ContainerNav>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
