'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './header.module.scss'
import { getToday } from '@/utils/getToday'

export default function Header() {
  const date = useState(() => getToday())[0]

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="" width={150} height={36} />

      <h1>Bem-vindo de volta, Marcus</h1>

      <span>{date}</span>
    </header>
  )
}
