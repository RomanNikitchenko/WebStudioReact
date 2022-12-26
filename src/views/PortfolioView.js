import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getfilter } from '../fakeAPI';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import styled from 'styled-components';

const SectionPortfolio = styled(Section)`
  @media screen and (min-width: 480px) {
    padding: 60px 0;
  }

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 94px 0;
  }
`;

const FilterList = styled.ul`
  display: flex;
  justify-content: center;
`;

const FilterItems = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

const FilterLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.625;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
  background: #f5f4fa;
  border-radius: 4px;
  padding: 6px 22px;

  &.active {
    color: var(--accent-color);
  }
`;

const PortfolioView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getfilter().then(setProducts);
  }, [setProducts]);

  return (
    <main>
      <SectionPortfolio>
        <Container>
          <FilterList>
            {products.map(({ id, name }) => (
              <FilterItems key={id}>
                <FilterLink to={`${id}`}>{name}</FilterLink>
              </FilterItems>
            ))}
          </FilterList>
          <Outlet />
        </Container>
      </SectionPortfolio>
    </main>
  );
};

//  <ul class="filter filter--end list">
//    <li class="filter__items">
//      <button class="button filter__button" type="button">
//        Все
//      </button>
//    </li>
//    <li class="filter__items">
//      <button class="button filter__button" type="button">
//        Веб-сайты
//      </button>
//    </li>
//    <li class="filter__items">
//      <button class="button filter__button" type="button">
//        Приложения
//      </button>
//    </li>
//    <li class="filter__items">
//      <button class="button filter__button" type="button">
//        Дизайн
//      </button>
//    </li>
//    <li class="filter__items">
//      <button class="button filter__button" type="button">
//        Маркетинг
//      </button>
//    </li>
//  </ul>;

export default PortfolioView;
