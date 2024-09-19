import dayjs from 'dayjs'
import 'dayjs/locale/pt'
dayjs.locale('pt')

export function getToday() {
  const today = dayjs()

  const formattedDate = today
    .format('dddd, DD [de] MMMM [de] YYYY')
    .replace(/-feira/g, '')

  return (
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1).toLowerCase()
  )
}
