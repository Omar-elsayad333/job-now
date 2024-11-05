// Types
import type { ComponentProps, PropsWithChildren } from 'react'

export enum EVariant {
  'filled' = 'filled',
  'outlined' = 'outlined',
}

export interface IChipProps extends PropsWithChildren<ComponentProps<'div'>> {
  variant?: EVariant
}
