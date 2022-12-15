import Navigation from './Navigation';
import { Container } from './Container';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  return (
    <header style={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
