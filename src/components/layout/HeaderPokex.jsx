import React from 'react'
import "./headerPokedex.css"
import imgHeader from "./imgHeader/pokeTittle.png"

const HeaderPokex = () => {
  return (
    <section className='containtHeader'>
    <div className='redHeader'></div>
    <div className='ballHeader'>
      <div className='centerBallHeader'></div>
    </div>
    <div className='imgHeader'>
      <img src={imgHeader} className='imageHeader' />
    </div>
    <div className='blackHeader'></div>
</section>
  )
}

export default HeaderPokex