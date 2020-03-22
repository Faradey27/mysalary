import styles from './Widget.module.scss';

const Widget = ({ title, children }) => {
  return (
    <article>
      <header>
        <h2 className={styles.title}>{title}</h2>
      </header>
      <section className={styles.content}>{children}</section>
    </article>
  );
};

export default Widget;
