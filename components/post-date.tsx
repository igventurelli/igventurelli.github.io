import moment from 'moment'

export default function PostDate({ dateString }: {
  dateString: string
}) {
  return <time dateTime={dateString}>{moment(dateString).format('MMM d, yyyy')}</time>
}
