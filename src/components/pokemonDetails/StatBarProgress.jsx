import React from 'react'
import "./styles/statBarProgressCss.css"

const StatBarProgress = ({stat}) => {

  const getPercentBarProgress = (value) => {
    const MAX_STAT_VALUE = 255
    const percent = (100 * value) / MAX_STAT_VALUE
    return `${percent}%`
  }


  return (
    <article className='containerBarProgress'>
      <section className='statsPokemon'>
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className='barProgress'>
        <div className='progressFill' style={{ width: getPercentBarProgress(stat.value) }}></div>
      </div>
    </article>
  )
}

export default StatBarProgress