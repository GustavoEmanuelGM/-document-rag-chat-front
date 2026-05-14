import { useState } from "react";
import { documentsMock } from "../../mocks/documentsMock";
import FolderCard from "../../components/FolderCard";
import UploadCard from "../../components/UploadCard";
import styles from "./Documentos.module.css";
import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Documents() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  
  // Função para extrair o valor numérico do tamanho (ex: "2.4 MB" → 2.4)
  const parseSizeToMB = (sizeString) => {
    if (!sizeString) return 0;
    const match = sizeString.match(/([\d.]+)/);
    const value = parseFloat(match ? match[1] : 0);

    // Se for GB, converte para MB (1 GB = 1024 MB)
    if (sizeString.includes('GB')) {
      return value * 1024;
    }

    return value; // Já está em MB
  };

  // Função para formatar tamanho (MB ou GB)
  const formatSize = (totalMB) => {
    if (totalMB >= 1024) {
      // Se for maior que 1024 MB, mostra em GB
      const gb = (totalMB / 1024).toFixed(1);
      return `${gb} GB`;
    }
    return `${totalMB.toFixed(1)} MB`;
  };

  // Função para calcular tamanho total de uma pasta
  const calculateFolderSize = (folderId, allItems) => {
    // Filtra apenas arquivos (não pastas) que estão dentro desta pasta
    const filesInFolder = allItems.filter(
      item => item.parentId === folderId && item.type === 'file'
    );

    // Soma todos os tamanhos em MB
    const totalMB = filesInFolder.reduce((acc, file) => {
      return acc + parseSizeToMB(file.size);
    }, 0);

    return formatSize(totalMB);
  };

  // (null = raiz)
  const [currentFolderId, setCurrentFolderId] = useState(null);

  //Mostra apenas itens cujo parentId é igual ao currentFolderId
  const displayList = documentsMock.filter(
    item => item.parentId === currentFolderId
  );

  // Conta quantos itens tem (para mostrar no header)
  const itemCount = displayList.length;

  // Encontra o nome da pasta atual para o breadcrumb
  const currentFolder = currentFolderId 
    ? documentsMock.find(f => f.id === currentFolderId)
    : null;

  // Handlers
  const handleFolderClick = (folder) => {
    setCurrentFolderId(folder.id); // Entra na pasta (o ID dela vira o filtro)
  };

  const handleBackToRoot = () => {
    setCurrentFolderId(null); // Volta pra raiz
  };

  return (
    <div className={styles.documents}>
      {/* HEADER com Breadcrumbs */}
      <div className={styles.header}>
        <div>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbs}>
            <span 
              className={`${styles.crumb} ${currentFolder ? styles.clickable : ''}`}
              onClick={handleBackToRoot}
            >
              Documentos
            </span>
            {currentFolder && (
              <>
                <span className={styles.separator}>›</span>
                <span className={styles.crumbCurrent}>{currentFolder.name}</span>
              </>
            )}
          </div>
          
          <span>{itemCount} documento{itemCount !== 1 && "s"}</span>
        </div>

        {/* Botões de Ação */}
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
              onClick={() => setMenuOpen(prev => !prev)}
            >
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

      {/* LISTA / GRID */}
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

        {displayList.map(item => {
          if (item.type === "folder") {
            // 👇 Calcula o tamanho dinamicamente
            const folderSize = calculateFolderSize(item.id, documentsMock);

            return (
              <FolderCard
                key={item.id}
                name={item.name}
                tag={item.tag}
                size={folderSize} // Usa o tamanho calculado
                items={documentsMock.filter(f => f.parentId === item.id).length}
                listView={viewMode === "list"}
                onClick={() => handleFolderClick(item)}
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

      {/* PAGINAÇÃO */}
      <div className={styles.pagination}>
        <button className={styles.pageBtn}>
          <FaChevronLeft /> Anterior
        </button>
        <div className={styles.pageNumbers}> 
          <button className={styles.pageNum + " " + styles.active}>1</button>
          <button className={styles.pageNum}>2</button>
          <button className={styles.pageNum}>3</button>
          <span className={styles.dots}>...</span>
        </div>
        <button className={styles.pageBtn}>
          Próximo <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Documents;