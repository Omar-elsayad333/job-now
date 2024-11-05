// Types
import { Routes } from '../../../routes/routes'
import { type CSSProperties } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()

  const styles: Record<string, CSSProperties> = {
    headerContainer: {
      backgroundColor: '#fff',
      padding: '25px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navContainer: {
      display: 'flex',
      gap: '24px',
      listStyle: 'none',
    },
  }

  return (
    <header style={styles.headerContainer}>
      <h1 className="sub-title">JobsNow</h1>
      <nav>
        <ul style={styles.navContainer} className="paragraph">
          <Link to={Routes.home} style={{ textDecoration: pathname === Routes.home ? 'underline' : 'none' }}>
            <li>Home</li>
          </Link>
          <Link to={Routes.search} style={{ textDecoration: pathname === Routes.search ? 'underline' : 'none' }}>
            <li>Search</li>
          </Link>
          <Link to={Routes.home} style={{ textDecoration: pathname === Routes.history ? 'underline' : 'none' }}>
            <li>History</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
