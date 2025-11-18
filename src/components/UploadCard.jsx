import CardBase from "../components/Cards/CardBase"
import Tags from "../pages/Tags"
import styles from "./UploadCard.module.css";

import { FaFileLines } from "react-icons/fa6"

 function UploadCard({ name, tag, size }) {
  return (
    <CardBase>
       <div className={styles.container}>
        <FaFileLines className={styles.icon} />
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