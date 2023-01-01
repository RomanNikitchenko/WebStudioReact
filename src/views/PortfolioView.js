import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { FilterListBtn } from 'components/FilterListBtn';
import styled from 'styled-components';

const SectionPortfolio = styled(Section)`
  @media screen and (max-width: 1199px) {
    padding: 60px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 94px 0;
  }
`;

const PortfolioView = () => {
  return (
    <main>
      <SectionPortfolio>
        <Container>
          <FilterListBtn />
          <Outlet />
        </Container>
      </SectionPortfolio>
    </main>
  );
};

export default PortfolioView;
