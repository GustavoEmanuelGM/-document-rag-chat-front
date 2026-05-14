import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "/logo.png";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNewFolder = () => {
    console.log("📁 Nova pasta");
    setMenuOpen(false);
  };

  const handleUploadFile = () => {
    console.log("📤 Upload de arquivo");
    setMenuOpen(false);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoTitle}>
        <img src={logo} alt="logo do site" />
        <h2>Document</h2>
      </div>

      <div className={styles.ctdSidebar}>
        <h5 className={styles.principal}>Principal</h5>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Início
        </NavLink>

        <NavLink
          to="/documentos"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Documentos
        </NavLink>

        <NavLink
          to="/tags"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Tags
        </NavLink>
      </div>

      {/* Wrapper com position: relative para controlar o menu */}
      <div className={styles.novoWrapper}>
        <button
          ref={btnRef}
          className={styles.navnew}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Novo +
        </button>

        {menuOpen && (
          <div ref={menuRef} className={styles.novoMenu}>
            <button onClick={handleNewFolder}><MdOutlineDriveFolderUpload />
            Nova pasta
            </button>
            
            <button onClick={handleUploadFile}><MdOutlineUploadFile />
            Upload de arquivo
            </button>

          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;