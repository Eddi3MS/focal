'use client'

import { useMemo, useState } from 'react'
import Todo from './components/Todo'
import styles from './todos.module.scss'
import Button from '../Button'
import CreateModal from './components/CreateModal'

export type TODO = {
  id: string
  text: string
  completed: boolean
}

export default function Todos() {
  const [todos, setTodos] = useState<TODO[]>([
    {
      id: '1',
      text: 'Levar o lixo pra fora',
      completed: false,
    },
  ])

  const sorted = useMemo(() => {
    return todos.reduce<{ completed: TODO[]; todo: TODO[] }>(
      (acc, att) => {
        if (att.completed) {
          acc.completed.push(att)
        } else {
          acc.todo.push(att)
        }

        return acc
      },
      {
        completed: [],
        todo: [],
      }
    )
  }, [todos])

  const toggleTodo = (id: string) => {
    setTodos((curr) =>
      curr.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((curr) => curr.filter((todo) => todo.id !== id))
  }

  const createTodo = (text: string) => {
    setTodos((curr) => [
      ...curr,
      {
        text,
        id: crypto.randomUUID(),
        completed: false,
      },
    ])
  }

  return (
    <main className={styles.container}>
      <div className={styles.todos}>
        <h2>Suas tarefas de hoje</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sorted.todo.length ? (
            sorted.todo.map((todo) => (
              <Todo
                key={todo.id}
                toggleTodo={toggleTodo.bind(null, todo.id)}
                deleteTodo={deleteTodo.bind(null, todo.id)}
                {...todo}
              />
            ))
          ) : (
            <p>Nenhuma tarefa adicionada.</p>
          )}
        </div>

        <h2>Tarefas finalizadas</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sorted.completed.length ? (
            sorted.completed.map((todo) => (
              <Todo
                key={todo.id}
                toggleTodo={toggleTodo.bind(null, todo.id)}
                deleteTodo={deleteTodo.bind(null, todo.id)}
                {...todo}
              />
            ))
          ) : (
            <p>Nenhuma tarefa finalizada.</p>
          )}
        </div>
      </div>

      <CreateModal createTodo={createTodo}>
        <Button variant="primary"> Adicionar nova tarefa</Button>
      </CreateModal>
    </main>
  )
}
