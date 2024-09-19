import React, { ButtonHTMLAttributes, forwardRef, LegacyRef } from 'react'
import styles from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'danger'
}

export default forwardRef(function Button(
  { variant, ...props }: ButtonProps,
  ref: LegacyRef<HTMLButtonElement> | undefined
) {
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : ''}`}
      {...props}
      ref={ref}
    />
  )
})
