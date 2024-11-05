// Types
import { type CSSProperties } from 'react'
import type { ICardTitleProps } from './types'

const CardTitle = ({ children, ...props }: ICardTitleProps) => {
  const styles: Record<string, CSSProperties> = {
    cardTitleContainer: {
      ...props.style,
    },
  }

  return (
    <p {...props} className="sub-title" style={styles.cardTitleContainer}>
      {children}
    </p>
  )
}

export default CardTitle
