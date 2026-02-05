import { useState } from "react";
import { documentsMock } from "../../mocks/documentsMock";
import FolderCard from "../../components/FolderCard";
import UploadCard from "../../components/UploadCard";
import styles from "./Documentos.module.css";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";


function Documents() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className={styles.documents}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h2>Documentos</h2>
          <span>4 documentos • 9.6 MB</span>
        </div>

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
                <button>Upload de arquivo</button>
                <button>Editar</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LIST / GRID */}
      <div className={viewMode === "list" ? styles.list : styles.grid}>
        {viewMode === "list" && (
          <div className={styles.listHeader}>
            <span></span>
            <span>Nome</span>
            <span>Tag</span>
            <span>Tamanho</span>
            <span>Modificado</span>
            <span></span>
          </div>
        )}

        {documentsMock.map(item => {
          if (item.type === "folder") {
            return (
              <FolderCard
                key={item.id}
                name={item.name}
                tag={item.tag}
                size={item.size}
                items={item.item}
                listView={viewMode === "list"}
              />
            );
          }
          
          return (
            <UploadCard
              key={item.id}
              name={item.name}
              tag={item.tag}
              size={item.size}
              listView={viewMode === "list"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Documents;
