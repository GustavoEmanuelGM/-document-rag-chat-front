import React from 'react';

const SidebarModal = ({ isOpen, onClose, onNewFolder, onUploadFile }) => {
  // Se não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Novo</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <button 
            className="modal-action" 
            onClick={() => { onNewFolder(); onClose(); }}
          >
             Nova pasta
          </button>
          
          <button 
            className="modal-action" 
            onClick={() => { onUploadFile(); onClose(); }}
          >
            📤 Upload de arquivo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;