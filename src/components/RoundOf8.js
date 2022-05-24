import React, { useContext, useEffect, useState } from 'react'
import { MundialContext } from '../context/mundialContext'
import Card8 from './Card8'
import RoundOfSF from './RoundOfSF'

const RoundOf8 = () => {
  const { gamesRoundOf8 } = useContext(MundialContext)
  const { passToSemifinals } = useContext(MundialContext)
  const { roundOf8Finished } = useContext(MundialContext)
  const [showSF, setShowSF] = useState(false)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {gamesRoundOf8.map((gr8, i) => (
          <Card8 match={gr8} key={gr8.idMatch} i={i} />
        ))}
      </div>
      <div>
        <div className="w-full p-5">
          <button
            disabled={roundOf8Finished}
            className="bg-yellow-200
            p-2 
            w-full
            rounded border-2 border-yellow-300 h-auto 
          disabled:bg-slate-200 disabled:border-green-200
            hover:bg-yellow-300
          "
            onClick={() => {
              passToSemifinals()
              setShowSF(true)
            }}
          >
            Pasar a semifinales
          </button>
        </div>
      </div>
      {showSF && <RoundOfSF></RoundOfSF>}
    </div>
  )
}

export default RoundOf8
/*

*/
