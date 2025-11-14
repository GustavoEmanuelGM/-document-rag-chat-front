
import styles from "./CardBase.module.css";

export default function CardBase({ children }) {
  return <div className={styles.card}>{children}</div>;
}
