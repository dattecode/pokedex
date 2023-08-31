import React from 'react'
import StatBarProgress from './StatBarProgress'
import "./styles/statsDetailsListCss.css"

const StatsDetailsList = ({ stats}) => {
  return (
    <section className='containerStatsDetails'>
      <h2 className='titleStatsDetails'>
        Stats
      </h2>
      <section>
        {
          stats?.map((stat) => <StatBarProgress key={stat.name} stat={stat} />)
        }
      </section>
    </section>
  )
}

export default StatsDetailsList