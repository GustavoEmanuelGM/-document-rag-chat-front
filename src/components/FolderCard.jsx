import CardBase from "../components/Cards/CardBase";
import styles from "./FolderCard.module.css";
import Tags from "../pages/Tags";
import { FaFolder } from "react-icons/fa6"; 

function FolderCard({ name, items, tag, size, listView }) {
  return (
    <CardBase>
      <div className={`${styles.row} ${listView ? styles.list : styles.grid}`}>
        <FaFolder className={styles.icon} />

        <span className={styles.name}>{name}</span>

        {listView && (
          <>
            <Tags label={tag} type={tag.toLowerCase()} />

            <span className={styles.size}>{size}</span>

            <span className={styles.date}>11 Fev, 2024</span>

          </>
        )}

        {!listView && (
          <span className={styles.items}>{items} itens</span>
        )}
      </div>
    </CardBase>
  );
}

export default FolderCard;