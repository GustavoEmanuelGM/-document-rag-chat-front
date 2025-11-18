import styles from "./Tags.module.css";

function Tags({ label, type }) {
  return <span className={`${styles.tag} ${styles[type]}`}>{label}</span>;
}

export default Tags;
