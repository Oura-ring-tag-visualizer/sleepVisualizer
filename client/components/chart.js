import React from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import LineChart from 'recharts/lib/chart/LineChart'
import Line from 'recharts/lib/cartesian/Line'
import XAxis from 'recharts/lib/cartesian/XAxis'
import YAxis from 'recharts/lib/cartesian/YAxis'
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid'
import Tooltip from 'recharts/lib/component/Tooltip'
import Legend from 'recharts/lib/component/Legend'

const Chart = props => {
  const {allData} = props
  console.log('HEEERRRREEE======>', AllData)
  return (
    <div>
      <ResponsiveContainer width="99%" height={320}>
        <LineChart data={allData}>
          <XAxis dataKey="name" stroke="whitesmoke" />
          <YAxis stroke="whitesmoke" />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
