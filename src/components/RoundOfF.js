import React, { useContext, useState } from 'react'
import { MundialContext } from '../context/mundialContext'
import CardF from './CardF'

const RoundOfSF = () => {
  const { gamesRoundOfF } = useContext(MundialContext)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {gamesRoundOfF.map((grf, i) => (
          <CardF match={grf} key={grf.idMatch} i={i} />
        ))}
      </div>
    </div>
  )
}

export default RoundOfSF
