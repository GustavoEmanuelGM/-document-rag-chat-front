import styles from './Header.module.css'
import { CiSearch } from "react-icons/ci";
import { FiBell } from 'react-icons/fi';
function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.searchBar}>
        <CiSearch />
        <input
          type="text"
          placeholder="Procurar documento..."
          className={styles.searchInput} />
      </div>

      <div className={styles.userActions}>
        <button className={styles.iconButton}>
          <FiBell size={18} />
        </button>
        
        <img src="/Ippo perfil.jpg" 
        alt="User profile"
        className={styles.avatar}/>
      </div>


    </header>

  )

}

export default Header