// Types
import { type CSSProperties } from 'react'

// Assets
import SearchIcon from '../../../assets/searchIcon.svg'

// Container
import useAutoComplete from './useAutoComplete'

// Components
import Menu from './Menu'

const AutoComplete = () => {
  const { searchRef, onChange, menu, open, loading } = useAutoComplete()

  const styles: Record<string, CSSProperties> = {
    inputContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: 'space-between',
      borderRadius: '5px',
      padding: '20px 16px',
      border: '1px solid #000000',
      width: '776px',
      maxWidth: '100%',
    },
    input: {
      fontSize: '24px',
      outline: 'none',
      border: 'none',
      flex: '1',
    },
  }

  return (
    <div style={styles.inputContainer}>
      <input
        ref={searchRef}
        onChange={onChange}
        type="text"
        placeholder="Search Keyword"
        className="search-input"
        style={styles.input}
      />
      <img src={SearchIcon} alt="Search For Job" />
      <Menu {...{ menu, loading, open }} />
    </div>
  )
}

export default AutoComplete
