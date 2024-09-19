import React, { ReactNode, useState } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styles from './create-modal.module.scss'
import Button from '@/components/Button'

export default function CreateModal({
  children,
  createTodo,
}: {
  children: ReactNode
  createTodo: (text: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todoInput = new FormData(e.currentTarget).get('todo')

    if (!todoInput || typeof todoInput !== 'string') {
      return
    }

    createTodo(todoInput)
    setIsOpen(false)
  }
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            Nova tarefa
          </AlertDialog.Title>

          <form onSubmit={handleCreate}>
            <div className={styles.input_wrapper}>
              <AlertDialog.Description asChild>
                <label htmlFor="todo">Título</label>
              </AlertDialog.Description>

              <input type="text" name="todo" id="todo" placeholder="Digite" />
            </div>

            <div className={styles.actions}>
              <AlertDialog.Cancel asChild>
                <Button>Cancelar</Button>
              </AlertDialog.Cancel>

              <Button variant="primary" type="submit">
                Adicionar
              </Button>
            </div>
          </form>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
