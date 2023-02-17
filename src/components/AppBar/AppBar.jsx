import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { ContactsNavList } from 'components/ContactsNavList';
import { IconSvg } from 'components/IconSvg';
import { SiteNavList } from 'components/SiteNavList';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { useMediaQuery } from '@react-hook/media-query';
import s from './AppBar.module.css';

export const AppBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isDeskAndTabl = useMediaQuery('only screen and (min-width: 768px)');
  const isMobile = useMediaQuery('only screen and (max-width: 767px)');

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.containerNav}>
            <Navigation />
            {isMobile && (
              <Button className={s.btnMenu} handleBtnClick={handleBtnClick}>
                <IconSvg
                  className={s.icon}
                  iconId="menuOpen"
                  width="40"
                  height="40"
                />
              </Button>
            )}
            {isDeskAndTabl && <ContactsNavList />}
          </div>
        </Container>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      {isMobile && openMenu && (
        <Modal className={s}>
          <Button className={s.btnMenu} handleBtnClick={handleBtnClick}>
            <IconSvg
              className={s.icon}
              iconId="menuClose"
              width="40"
              height="40"
            />
          </Button>
          <SiteNavList handleBtnClick={handleBtnClick} />
        </Modal>
      )}
    </>
  );
};
