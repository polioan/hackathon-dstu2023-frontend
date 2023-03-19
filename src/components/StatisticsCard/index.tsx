import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Input, LighterText, LightText } from '../../ui'
import cl from './StatisticsCard.module.scss'

const devdata = [
  { month: '1-6', sales: 12 },
  { month: '7-12', sales: 19 },
  { month: '13-19', sales: 3 },
  { month: '20-6', sales: 5 },
  { month: '7-31', sales: 2 },
]

const StatisticsCard: React.FC<{ data: any }> = ({ data }) => {
  const pipedData = devdata ?? data
  return (
    <section className={cl.container}>
      <LightText className={cl.sotrform}>
        <span>Сотрудник:</span>
        <LighterText className={cl.inputs}>
          <Input type='text' placeholder='ФИО' disabled />
          <Input type='text' placeholder='Должность' disabled />
        </LighterText>
      </LightText>
      <div>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={pipedData}>
            <XAxis dataKey='month' />
            <YAxis />
            <Line type='monotone' dataKey='sales' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default StatisticsCard
