
import styles from "./CardBase.module.css";

export default function CardBase({ children }) {
  return (
    <div
      className={styles.card}
      tabIndex={0}  
    >
      {children}
    </div>
  );
}
