import { uploadsMock } from "../../mocks/uploadsMock";
import UploadCard from "../../components/UploadCard";
import styles from "./Home.module.css";
import { FoldersMock } from "../../mocks/foldersMock";
import FolderCard from "../../components/FolderCard";


function Home() {
  return (

    <div className={styles.home}>

      <h2>Pastas sugeridas</h2>

      <div className={styles.grid}>
        {FoldersMock.map(folder => (
          <FolderCard
            key={folder.id}
            name={folder.name}
            items={folder.items}
          />
        ))}
      </div>

      <h2>Últimos uploads</h2>

      <div className={styles.grid}>
        {uploadsMock.map(file => (
          <UploadCard
            key={file.id}
            name={file.name}
            tag={file.tag}
            size={file.size}
          />
        ))}
      </div>
      

     
    </div>
  );
}

export default Home