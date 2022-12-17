import styled from 'styled-components';
import { Container } from 'components/Container';
import { Navigation } from 'components/Navigation';

const Header = styled.header`
  background-color: var(--text-color-white);
  border-bottom: 1px solid var(--block-border-line);
`;

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Navigation />
      </Container>
    </Header>
  );
};
