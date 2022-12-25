import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: auto;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--title-text-color);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;

  &.active {
    color: var(--accent-color);
  }

  &:hover {
    color: var(--accent-color);
  }
`;

export const ContactsNavList = () => {
  return (
    <List>
      <Item>
        <StyledLink to="/mailto:info@devstudio.com">
          {/* <svg class="contact-nav__icon" width="14" height="10">
            <use href="./images/icons.svg#envelope2"></use>
          </svg>
          <svg class="contact-nav__icon" width="16" height="12">
            <use href="./images/icons.svg#envelope"></use>
          </svg> */}
          info@devstudio.com
        </StyledLink>
      </Item>

      <Item>
        <StyledLink to="/tel:+380961111111">
          {/* <svg class="contact-nav__icon" width="10" height="14">
            <use href="./images/icons.svg#smartphone"></use>
          </svg>
          <svg class="contact-nav__icon" width="10" height="16">
            <use href="./images/icons.svg#smartphone2"></use>
          </svg> */}
          +38 096 111 11 11
        </StyledLink>
      </Item>
    </List>
  );
};
