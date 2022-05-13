import React, { useContext, useEffect } from 'react'
import { MundialContext } from '../context/mundialContext'
const Prueba = () => {
  const { groups } = useContext(MundialContext)
  const { players } = useContext(MundialContext)
  //const { setPlayers } = useContext(MundialContext)
  useEffect(() => {
    //console.log(groups)
  }, [])

  return (
    <div className="flex">
      <div>
        usuarios registrados:
        {players.map((p) => (
          <div key={p.id} className="flex my-2">
            <div className="h-auto w-12 bg-lime-200 text-center">{p.id}</div>
            <div className="h-auto text-center">{p.player}</div>
          </div>
        ))}
      </div>
      <div>
        resultados:
        {groups.map((g) =>
          g.matches.map((m) => (
            <div key={m.idMatch} className="flex">
              <div className="w-1/2 flex ">
                <div className="w-1/2 text-center truncate">{m.home}</div>
                <div className="w-1/2">
                  <input
                    className="w-full text-center"
                    name={`homeScore${m.idMatch}`}
                    defaultValue={m.homeScore}
                  ></input>
                </div>
              </div>
              <div className="w-1/2 flex ">
                <div className="w-1/2">
                  <input
                    className="w-full text-center"
                    name={`awayScore${m.idMatch}`}
                    defaultValue={m.awayScore}
                  ></input>
                </div>
                <div className="w-1/2 text-center truncate">{m.away}</div>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  )
}

export default Prueba
