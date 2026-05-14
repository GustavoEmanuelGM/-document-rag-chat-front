import { uploadsMock } from "../../mocks/uploadsMock";
import UploadCard from "../../components/UploadCard";
import styles from "./Home.module.css";
import { FoldersMock } from "../../mocks/foldersMock";
import FolderCard from "../../components/FolderCard";
import { useState } from "react";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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

          <div className={styles.actions}>
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

            <div className={styles.menuWrapper}>
              <button
                className={`${styles.toggleBtn} ${menuOpen ? styles.active : ""}`}
                onClick={() => setMenuOpen(prev => !prev)}>
                <MdMoreHoriz />

              </button>

              {menuOpen && (
                <div className={styles.menu}>

                  <button> <RiFileEditFill />Editar</button>

                  <button> <FaCloudUploadAlt />Upload de arquivo</button>

                </div>
              )}
            </div>
          </div>
          
        </div>

        {/* LIST MODE */}
        {viewMode === "list" && (
          <div className={styles.listWrapper}>
            <div className={styles.listHeader}>
              <span></span>
              <span>Nome</span>
              <span>Tag</span>
              <span>Tamanho</span>
              <span>Modificado</span>
              <span></span> 
            </div>
            
            <div className={styles.listBody}>
              {uploadsMock.map(file => (
                <UploadCard
                  key={file.id}
                  name={file.name}
                  tag={file.tag}
                  size={file.size}
                  listView
                />
              ))}
            </div>
          </div>
        )}

        {/* GRID MODE */}
        {viewMode === "grid" && (
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
        )}
      </div>



    </div>
  );
}

export default Home