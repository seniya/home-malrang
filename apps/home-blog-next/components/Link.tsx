'use client'

import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({
  href,
  children,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink =
    (href as string).startsWith('/') || (href as string).startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} className='retro-link' {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href as string}
      target='_blank'
      rel='noopener noreferrer'
      className='retro-link'
      {...rest}
    >
      {children}
    </a>
  )
}

export default CustomLink
