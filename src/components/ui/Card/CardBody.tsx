// Types
import { type CSSProperties } from 'react'
import type { ICardBodyProps } from './types'

const CardBody = ({ children, ...props }: ICardBodyProps) => {
  const styles: Record<string, CSSProperties> = {
    cardBodyContainer: {
      ...props.style,
    },
  }

  return (
    <div {...props} style={styles.cardBodyContainer}>
      {children}
    </div>
  )
}

export default CardBody
