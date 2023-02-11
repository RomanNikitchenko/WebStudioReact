import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';
import { ContactsNavList } from 'components/ContactsNavList';
import { IconCloseAndOpen } from 'components/IconCloseAndOpen';
import { SiteNavList } from 'components/SiteNavList';
import { BtnMenu } from 'components/BtnMenu';
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
              <BtnMenu className={s.btnMenu} handleBtnClick={handleBtnClick}>
                <IconCloseAndOpen className={s} iconBtn="menuOpen" />
              </BtnMenu>
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
          <BtnMenu className={s.btnMenu} handleBtnClick={handleBtnClick}>
            <IconCloseAndOpen className={s} iconBtn="menuClose" />
          </BtnMenu>
          <SiteNavList handleBtnClick={handleBtnClick} />
        </Modal>
      )}
    </>
  );
};
