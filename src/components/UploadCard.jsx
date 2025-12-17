import CardBase from "../components/Cards/CardBase";
import Tags from "../pages/Tags";
import styles from "./UploadCard.module.css";
import { FaRegFileLines } from "react-icons/fa6";

function UploadCard({ name, tag, size, listView }) {
  // MODO LISTA
  if (listView) {
    return (
    <CardBase>
      <div className={listView ? styles.listCard : styles.gridCard}>

        {/* COLUNA 1 - ÍCONE */}
        <FaRegFileLines
          className={`${styles.icon} ${styles[tag.toLowerCase()]}`}
        />

        {/* COLUNA 2 - NOME */}
        <p className={styles.name}>{name}</p>

        {/* COLUNA 3 - TAG */}
        <Tags label={tag} type={tag.toLowerCase()} />

        {/* COLUNA 4 - TAMANHO */}
        <span className={styles.size}>{size}</span>

        {/* COLUNA 5 - MODIFICADO / AÇÕES */}
        <span className={styles.modified}>11 Fev, 2024</span>

      </div>
    </CardBase>
  );
  }

  // MODO GRID
  return (
    <CardBase>
      <div className={styles.gridCard}>
        <FaRegFileLines className={`${styles.icon} ${styles[tag.toLowerCase()]}`} />
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