import { useState, useEffect } from "react";
import styles from "./TagModal.module.css";

const presetColors = ["#1447E6", "#C10007", "#008236", "#F59E0B", "#8B5CF6", "#EC4899", "#6B7280", "#000000"];

function TagModal({ isOpen, onClose, tag, onSave }) {
  const [formData, setFormData] = useState({ name: "", color: "#1447E6", description: "" });

  useEffect(() => {
    if (tag) setFormData({ name: tag.name, color: tag.color, description: tag.description });
    else setFormData({ name: "", color: "#1447E6", description: "" });
  }, [tag, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h3>{tag ? "Editar Tag" : "Nova Tag"}</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Nome da Tag</label>
            <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ex: Contrato, Pessoal..." required />
          </div>

          <div className={styles.field}>
            <label>Cor</label>
            <div className={styles.colorPicker}>
              {presetColors.map(c => (
                <button key={c} type="button" className={`${styles.colorOption} ${formData.color === c ? styles.selected : ""}`} style={{ backgroundColor: c }} onClick={() => setFormData({...formData, color: c})} />
              ))}
              <input type="color" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className={styles.customColor} title="Cor personalizada" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Descrição</label>
            <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Breve descrição do uso..." rows="3" />
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancelar</button>
            <button type="submit" className={styles.saveBtn}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TagModal;