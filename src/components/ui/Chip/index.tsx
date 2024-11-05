// Types
import { type CSSProperties } from 'react'
import { EVariant, type IChipProps } from './types'

const Chip = ({ children, variant = EVariant.filled, ...props }: IChipProps) => {
  const styles: Record<string, CSSProperties> = {
    chipContainer: {
      padding: '6px 12px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...props.style,
    },
    [EVariant.filled]: {
      backgroundColor: '#C4C4C4',
    },
    [EVariant.outlined]: {
      border: '1px solid #C4C4C4',
    },
  }

  return (
    <div className="paragraph" {...props} style={{ ...styles.chipContainer, ...styles[variant] }}>
      {children}
    </div>
  )
}

export default Chip
