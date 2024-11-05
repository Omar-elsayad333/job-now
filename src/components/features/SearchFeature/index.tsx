// Types
import { type CSSProperties } from 'react'

// Components
import AutoComplete from '../../ui/AutoComplete'

const SearchFeature = () => {
  const styles: Record<string, CSSProperties> = {
    container: {
      width: '100%',
      padding: '34px',
      marginTop: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  }

  return (
    <section style={styles.container}>
      <AutoComplete />
    </section>
  )
}

export default SearchFeature
