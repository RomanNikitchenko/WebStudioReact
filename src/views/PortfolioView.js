import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getfilter } from '../fakeAPI';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { useDispatch } from 'react-redux';
import { addCurrentType } from 'redux/extraInfo/extraInfo-slice';
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
  margin-bottom: 50px;
`;

const FilterItems = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
`;

const FilterLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.625;
  text-align: center;
  letter-spacing: 0.03em;
  color: var(--title-text-color);
  background: var(--bg-color-light);
  border-radius: 4px;
  padding: 6px 22px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: var(--text-color-white);
    background: var(--accent-color);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: var(--text-color-white);
    background: var(--accent-color);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

const PortfolioView = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getfilter().then(setProducts);
  }, [setProducts]);

  const handleClick = evt => {
    dispatch(addCurrentType(evt.target.name));
  };

  return (
    <main>
      <SectionPortfolio>
        <Container>
          <FilterList>
            {products.map(({ id, name }) => (
              <FilterItems key={id}>
                <FilterLink name={`${id}`} to={`${id}`} onClick={handleClick}>
                  {name}
                </FilterLink>
              </FilterItems>
            ))}
          </FilterList>
          <Outlet />
        </Container>
      </SectionPortfolio>
    </main>
  );
};

export default PortfolioView;
