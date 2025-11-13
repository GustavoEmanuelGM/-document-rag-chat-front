import styles from './Header.module.css'
import { CiSearch } from "react-icons/ci";

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

      <div className="right">icons + avatar</div>


    </header>

  )

}

export default Header