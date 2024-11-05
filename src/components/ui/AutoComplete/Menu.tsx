// Types
import type { IJob } from '../../../types/jobTypes'
import { type CSSProperties } from 'react'

// Routes
import { Routes } from '../../../routes/routes'

// Components
import { Link } from 'react-router-dom'

const Menu = ({ menu, loading, open }: { menu: any[]; loading: boolean; open: boolean }) => {
  const styles: Record<string, CSSProperties> = {
    container: {
      position: 'absolute',
      top: '100%',
      left: '0px',
      marginTop: '4px',
      padding: '10px 0px',
      maxHeight: '200px',
      overflowY: 'auto',
      listStyle: 'none',
      zIndex: '100',
      borderRadius: '5px',
      backgroundColor: 'white',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      display: open || loading ? 'block' : 'none',
    },
    item: {
      cursor: 'pointer',
      padding: '20px 10px',
    },
  }

  return (
    <ul style={styles.container}>
      {loading ? (
        <li style={styles.item}>loading...</li>
      ) : (
        menu.map((item: IJob) => (
          <Link key={item.id} to={Routes.job.replace(':id', item.id)}>
            <li key={item.id} style={styles.item}>
              {item.attributes.title}
            </li>
          </Link>
        ))
      )}
    </ul>
  )
}

export default Menu
