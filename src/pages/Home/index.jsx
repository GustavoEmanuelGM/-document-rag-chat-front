import styles from "./Home.module.css";
import { uploadsMock,} from "../../mocks/uploadsMock";
import { recentFoldersMock } from "../../mocks/foldersMock";
function Home() {
  return (
    <div className={styles.home}>
       <h2>Pastas recentes</h2>

      <div className={styles.folderList}>
        {recentFoldersMock.map(folder => (
          <div key={folder.id} className={styles.folderCard}>
            <p>{folder.name}</p>
            <span>{folder.items} itens</span>
          </div>
        ))}
      </div>

      <h2>Últimos uploads</h2>

      <div className={styles.uploadList}>
        {uploadsMock.map(file => (
          <div key={file.id} className={styles.uploadCard}>
            <p>{file.name}</p>
            <span>{file.size}</span>
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Home;