import { useState, useEffect } from "react";
import styles from "./TagManager.module.css";
import TagModal from "../../components/TagModal/TagModal";

// Dados iniciais (mock)
const initialTags = [
  { id: 1, name: "Contrato", color: "#1447E6", description: "Documentos jurídicos e acordos", count: 12 },
  { id: 2, name: "RPG", color: "#C10007", description: "Manuais e fichas de jogos", count: 5 },
  { id: 3, name: "Livro", color: "#008236", description: "Ebooks e materiais de leitura", count: 8 },
];

function TagManager() {
  const [tags, setTags] = useState(initialTags);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTag, setEditingTag] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null); // 👈 Estado do menu dropdown

  // 👈 Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOpenCreate = () => {
    setEditingTag(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (tag) => {
    setEditingTag(tag);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta tag? Documentos com esta tag ficarão sem classificação.")) {
      setTags(tags.filter(t => t.id !== id));
    }
  };

  const handleSave = (tagData) => {
    if (editingTag) {
      setTags(tags.map(t => t.id === editingTag.id ? { ...t, ...tagData } : t));
    } else {
      setTags([...tags, { ...tagData, id: Date.now(), count: 0 }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <div>
          <h2>Gerenciar Tags</h2>
          <span>{tags.length} tags criadas</span>
        </div>
        <button className={styles.btnPrimary} onClick={handleOpenCreate}>
          + Nova Tag
        </button>
      </div>

      {/* LISTA */}
      <div className={styles.list}>
        <div className={styles.listHeader}>
          <span>Nome</span>
          <span>Descrição</span>
          <span>Etiqueta</span>
          <span>Documentos</span>
          <span></span>
        </div>

        {tags.map(tag => (
          <div key={tag.id} className={styles.listItem}>
            {/* Nome */}
            <div className={styles.nameCell}>
              <div className={styles.colorDot} style={{ backgroundColor: tag.color }} />
              <span>{tag.name}</span>
            </div>

            {/* Descrição */}
            <span className={styles.descCell}>{tag.description || "-"}</span>

            {/* Etiqueta (Badge) */}
            <div className={styles.tagCell}>
              <span
                className={styles.badge}
                style={{
                  backgroundColor: `${tag.color}20`,
                  color: tag.color,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "500"
                }}
              >
                {tag.name}
              </span>
            </div>

            {/* Qtd. Arquivos */}
            <span className={styles.countCell}>{tag.count}</span>

            {/* Ações (Menu Dropdown) */}
            <div className={styles.actionsCell}>
              <button 
                className={styles.btnMenu} 
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId(openMenuId === tag.id ? null : tag.id);
                }}
              >
                ⋯
              </button>
              
              {openMenuId === tag.id && (
                <div className={styles.dropdownMenu} onClick={e => e.stopPropagation()}>
                  <button onClick={() => { handleOpenEdit(tag); setOpenMenuId(null); }}>Editar</button>
                  <button onClick={() => { handleDelete(tag.id); setOpenMenuId(null); }} className={styles.deleteOption}>Excluir</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <TagModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tag={editingTag}
        onSave={handleSave}
      />
    </div>
  );
}

export default TagManager;