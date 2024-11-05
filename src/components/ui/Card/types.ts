import type { ComponentProps, PropsWithChildren } from 'react'

export interface ICardProps extends PropsWithChildren<ComponentProps<'div'>> {}

export interface ICardTitleProps extends ICardProps {}

export interface ICardBodyProps extends ICardProps {}

export interface ICardFooterProps extends ICardProps {}
