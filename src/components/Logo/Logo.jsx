import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: var(--text-color-blac);
  text-decoration: none;
  padding: 24px 0;
  margin-right: 93px;
`;

const Span = styled.span`
  color: var(--accent-color);
`;

export const Logo = () => {
  return (
    <StyledLink to="/">
      <Span>Web</Span>Studio
    </StyledLink>
  );
};
