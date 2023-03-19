import { Table, StatisticsCard } from '../../components'
import cl from './Home.module.scss'
import Logo from '../../assets/logo-header.svg'
import { useQuery } from '@tanstack/react-query'
import axios from '../../helpers/axios'

const Home: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['dataKEY'],
    queryFn: async () => {
      const { data } = await axios.get<IStatItem[][]>('/data')
      return data
    },
    suspense: true,
  })
  console.log(data)
  return (
    <div className={cl.container}>
      <img src={Logo} alt='Axenix logo' className={cl.logo} />
      {data?.map((table, i) => (
        <Table data={table} key={i} />
      ))}
      <StatisticsCard data={data} />
    </div>
  )
}

export default Home
