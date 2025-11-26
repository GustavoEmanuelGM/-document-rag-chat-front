import CardBase from "../components/Cards/CardBase"
import Tags from "../pages/Tags"
import styles from "./UploadCard.module.css";

import { FaRegFileLines } from "react-icons/fa6";

 function UploadCard({ name, tag, size, listView }) {
  return (
    <CardBase>
        <div className={listView ? styles.listCard : styles.gridCard}></div>
        <div className={styles.container}>
        
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