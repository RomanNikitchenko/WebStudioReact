import styles from './Container.module.css';

export const Container = ({ children }) => {
  return <div className={styles.conteiner}>{children}</div>;
};
