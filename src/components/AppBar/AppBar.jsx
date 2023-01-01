import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { ContactsNavList } from 'components/ContactsNavList';
import { BtnMenu } from 'components/BtnMenu';
import { useMediaQuery } from '@react-hook/media-query';
import s from './AppBar.module.css';

export const AppBar = () => {
  const isDesktopAndTablet = useMediaQuery(
    'only screen and (min-width: 768px)'
  );
  const isMobile = useMediaQuery('only screen and (max-width: 767px)');

  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.containerNav}>
            <Navigation />
            {isMobile && <BtnMenu />}
            {isDesktopAndTablet && <ContactsNavList />}
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  );
};
