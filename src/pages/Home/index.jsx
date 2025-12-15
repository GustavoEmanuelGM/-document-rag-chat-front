import { uploadsMock } from "../../mocks/uploadsMock";
import UploadCard from "../../components/UploadCard";
import styles from "./Home.module.css";
import { FoldersMock } from "../../mocks/foldersMock";
import FolderCard from "../../components/FolderCard";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

function Home() {
  const [viewMode, setViewMode] = useState("grid");
  return (

    <div className={styles.home}>

      <div>
        <h3>Pastas sugeridas</h3>

        <div className={styles.grid}>
          {FoldersMock.map(folder => (
            <FolderCard
              key={folder.id}
              name={folder.name}
              items={folder.items}
            />
          ))}
        </div>
      </div>


      <div className={styles.upfile}>
        <div className={styles.topcard}>
          <h3>Últimos uploads</h3>
          <div>
            <button
              className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.active : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <IoGridOutline />
            </button>

            <button
              className={`${styles.toggleBtn} ${viewMode === "list" ? styles.active : ""}`}
              onClick={() => setViewMode("list")}
            >
              <CiBoxList />
            </button>
          </div>
        </div>
       

        
        <div className={viewMode === "list" ? styles.list : styles.grid}>
          {uploadsMock.map(file => (
            <UploadCard
              key={file.id}
              name={file.name}
              tag={file.tag}
              size={file.size}
              listView={viewMode === "List"}
            />
          ))}
        </div>
        
      
        
        
      </div>



    </div>
  );
}

export default Home