import CardBase from "../components/Cards/CardBase";
import styles from "./FolderCard.module.css";
import { FaFolder } from "react-icons/fa6"; 

 function FolderCard({ name, items }) {
  return (
    <CardBase>
       <div className={styles.container}>
        <FaFolder className={styles.icon} />

        <p className={styles.name}>{name}</p>

        <span className={styles.size}>{items} itens</span>
      </div>
    </CardBase>
  );
}

export default FolderCard