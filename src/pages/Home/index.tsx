import { Table, StatisticsCard } from '../../components'
import cl from './Home.module.scss'
import Logo from '../../assets/logo-header.svg'
import { useQuery } from '@tanstack/react-query'
import axios from '../../helpers/axios'

const Home: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['dataKEY'],
    queryFn: async () => {
      const { data } = await axios.get<IStatItem[]>('/data')
      return data
    },
    suspense: true,
  })
  return (
    <div className={cl.container}>
      <img src={Logo} alt='' className={cl.logo} />
      <Table data={data} />
      <StatisticsCard data={data} />
    </div>
  )
}

export default Home
