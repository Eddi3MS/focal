import styles from './todo.module.scss'
import { TODO } from '../../Todos'
import DeleteModal from '../DeleteModal'

export default function Todo({
  toggleTodo,
  deleteTodo,
  id,
  text,
  completed,
}: {
  toggleTodo: VoidFunction
  deleteTodo: VoidFunction
} & TODO) {
  return (
    <label className={styles.todo} htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className={styles['custom-checkbox']}
        onChange={toggleTodo}
        checked={completed}
      />
      <span className={styles.checkbox} aria-label="marcar como concluído">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 4.5L6.75 12.75L3 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.text}>{text}</span>
      <div onClick={(e) => e.preventDefault()}>
        <DeleteModal handleDelete={deleteTodo}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
              stroke="currentColor"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DeleteModal>{' '}
      </div>
    </label>
  )
}
