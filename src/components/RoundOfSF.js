import React, { useContext, useState } from 'react'
import { MundialContext } from '../context/mundialContext'
import CardSF from './CardSF'
import RoundOfF from './RoundOfF'

const RoundOfSF = () => {
  const { gamesRoundOfSF } = useContext(MundialContext)
  const { passToFinals } = useContext(MundialContext)
  const { roundOfSFFinished } = useContext(MundialContext)
  const [showF, setShowF] = useState(false)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {gamesRoundOfSF.map((gr8, i) => (
          <CardSF match={gr8} key={gr8.idMatch} i={i} />
        ))}
      </div>
      <div>
        <div className="w-full p-5">
          <button
            disabled={roundOfSFFinished}
            className="bg-yellow-200
          p-2 
          w-full
          rounded border-2 border-yellow-300 h-auto 
        disabled:bg-slate-200 disabled:border-green-200
          hover:bg-yellow-300
        "
            onClick={() => {
              passToFinals()
              setShowF(true)
            }}
          >
            Pasar a finales
          </button>
        </div>
      </div>
      {showF && <RoundOfF></RoundOfF>}
    </div>
  )
}

export default RoundOfSF
