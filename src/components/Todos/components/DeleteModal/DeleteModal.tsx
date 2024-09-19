import React, { ReactNode } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styles from './delete-modal.module.scss'
import Button from '@/components/Button'

export default function DeleteModal({
  children,
  handleDelete,
}: {
  children: ReactNode
  handleDelete: VoidFunction
}) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            Deletar tarefa
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            Tem certeza que você deseja deletar essa tarefa?
          </AlertDialog.Description>

          <div className={styles.actions}>
            <AlertDialog.Cancel asChild>
              <Button>Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild onClick={handleDelete}>
              <Button variant="danger">Deletar</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
