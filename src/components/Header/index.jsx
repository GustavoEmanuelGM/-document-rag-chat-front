import styles from './Header.module.css'
function Header() {
  return(
    <header className={styles.Header}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Procurar documento..."
          className="search-input"
        />
        <button className="search-button"></button>
      </div>
    </header>

  )

}

export default Header