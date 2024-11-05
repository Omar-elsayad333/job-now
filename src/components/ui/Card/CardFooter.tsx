// Types
import { type CSSProperties } from 'react'
import type { ICardFooterProps } from './types'

const CardFooter = ({ children, ...props }: ICardFooterProps) => {
  const styles: Record<string, CSSProperties> = {
    cardFooterContainer: {
      display: 'flex',
      gap: '10px',
      ...props.style,
    },
  }

  return (
    <div {...props} style={styles.cardFooterContainer}>
      {children}
    </div>
  )
}

export default CardFooter
