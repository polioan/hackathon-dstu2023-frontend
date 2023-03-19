import cl from './Table.module.scss'

function toPercent(percent: string | number): string {
  percent =
    typeof percent === 'string'
      ? parseFloat(percent.replaceAll(',', '.'))
      : percent
  if (isNaN(percent) || percent > 1) return '?'
  if (percent === -1) return 'Оффлайн'
  const resultPercent = Math.floor(percent * 100)
  return `${resultPercent}%`
}

const Table: React.FC<{ data: IStatItem[] | undefined }> = ({ data }) => {
  return (
    <table className={cl.table}>
      <thead>
        <tr>
          <th>№</th>
          <th>ФИО</th>
          <th>Критерии</th>
          <th>Риск, %</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(value => {
          return (
            <tr key={value.id}>
              <td>{value.id++}</td>
              <td>{value.name}</td>
              <td>{value.criteria}</td>
              <td>{toPercent(value.percent)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
