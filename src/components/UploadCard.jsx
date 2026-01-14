import CardBase from "../components/Cards/CardBase";
import Tags from "../pages/Tags";
import styles from "./UploadCard.module.css";
import { FaRegFileLines } from "react-icons/fa6";

function UploadCard({ name, tag, size, listView }) {
  // ===== MODO LISTA =====
  if (listView) {
    return (
      <div className={styles.uploadWrapper}>


        <div className={styles.listCard}>
          <FaRegFileLines
            className={`${styles.icon} ${styles[tag.toLowerCase()]} ${styles.listIcon}`}
          />

          <span className={styles.name}>{name}</span>

          <Tags label={tag} type={tag.toLowerCase()} />

          <span className={styles.size}>{size}</span>

          <span className={styles.date}>11 Fev, 2024</span>

        </div>
      </div>
    );
  }

  // ===== MODO GRID =====
  return (
    <CardBase>
      <div className={styles.gridCard}>
        <FaRegFileLines
          className={`${styles.icon} ${styles[tag.toLowerCase()]}`}
        />

        <p className={styles.name}>{name}</p>

        <div className={styles.info}>
          <Tags label={tag} type={tag.toLowerCase()} />
          <span className={styles.size}>{size}</span>
        </div>
      </div>
    </CardBase>
  );
}

export default UploadCard;