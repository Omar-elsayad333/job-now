// Types
import type { ComponentProps, CSSProperties, PropsWithChildren } from 'react'

type IProps = PropsWithChildren<ComponentProps<'div'>>

const Card = ({ children, ...props }: IProps) => {
  const styles: Record<string, CSSProperties> = {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '42px 37px',
      ...props.style,
    },
  }
  return (
    <div {...props} style={styles.cardContainer}>
      {children}
    </div>
  )
}

export default Card
