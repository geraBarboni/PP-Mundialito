import React, { useContext, useEffect, useState } from 'react'
import { MundialContext } from '../context/mundialContext'
import Card16 from './Card16'
import RoundOf8 from './RoundOf8'

const RoundOf16 = () => {
  const { gamesRoundOf16 } = useContext(MundialContext)
  const { roundOf16Finished } = useContext(MundialContext)
  const { passToRoundOf8 } = useContext(MundialContext)
  const [show8, setShow8] = useState(false)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {gamesRoundOf16.map((gr16, i) => (
          <Card16 match={gr16} key={gr16.idMatch} i={i} />
        ))}
      </div>
      <div className="w-full p-5">
        <button
          disabled={roundOf16Finished}
          className="bg-yellow-200
            p-2 
            w-full
            rounded border-2 border-yellow-300 h-auto 
          disabled:bg-slate-200 disabled:border-green-200
            hover:bg-yellow-300
          "
          onClick={() => {
            passToRoundOf8()
            setShow8(true)
          }}
        >
          Pasar a cuartos de final
        </button>
      </div>
      {show8 && <RoundOf8></RoundOf8>}
    </div>
  )
}

export default RoundOf16
