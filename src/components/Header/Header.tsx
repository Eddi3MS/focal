import Image from 'next/image'
import React from 'react'
import styles from './header.module.scss'
import { getToday } from '@/utils/getToday'

const date = getToday()

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="" width={150} height={36} />

      <h1>Bem-vindo de volta, Marcus</h1>

      <span>{date}</span>
    </header>
  )
}
