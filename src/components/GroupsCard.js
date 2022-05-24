import React, { useContext, useEffect } from 'react'
import { MundialContext } from '../context/mundialContext'
import Points from './Points'

const GroupsCard = ({ group, id }) => {
  const { players } = useContext(MundialContext)
  const { handleMatches } = useContext(MundialContext)
  const { groupFasesMatches } = useContext(MundialContext)
  const { handleScore } = useContext(MundialContext)

  return (
    <div className="border-2 border-gray-400 m-auto my-2 w-96 p-2 rounded-md">
      <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Grupo {id} </p>
      </div>
      <div className="w-full">
        <div className="flex">
          <div className="w-1/6 text-center truncate">pais</div>
          <div className="w-1/6 text-center truncate">jugador</div>
          <div className="w-1/6 text-center truncate">p</div>
          <div className="w-1/6 text-center truncate">gf</div>
          <div className="w-1/6 text-center truncate">gc</div>
          <div className="w-1/6 text-center truncate">dg</div>
        </div>
      </div>
      <div className="w-full">
        {group.map((c) => (
          <div key={c.id} className="flex">
            <div className="w-1/6 text-center truncate">{c.countrie}</div>
            <div className="w-1/6 text-center truncate">
              {players.map((p, i) => i + 1 === c.id && p.player)}
            </div>
            <div className="w-1/6 text-center truncate">
              <Points points={c.points} />
            </div>
            <div className="w-1/6 text-center truncate">{c.goalsPlus}</div>
            <div className="w-1/6 text-center truncate">{c.goalsRest}</div>
            <div className="w-1/6 text-center truncate">
              {c.goalsPlus - c.goalsRest}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-b-2  mt-2">
        <p className="text-md text-center">Partidos</p>
      </div>

      <div className="">
        {groupFasesMatches
          .filter((gm) => gm.igGroup === id)
          .map((m) => (
            <div key={m.idMatch} className="flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 text-center truncate">
                  {group.map((c) => c.id === m.home && c.countrie)}
                </div>

                <input
                  onChange={(e) => {
                    handleMatches(m, e.target.value, m.awayScore)
                  }}
                  className="w-1/2 text-center"
                  placeholder={'-'}
                />
              </div>
              <div className="w-1/2 flex">
                <input
                  onChange={(e) => {
                    handleMatches(m, m.homeScore, e.target.value)
                  }}
                  className="w-1/2 text-center"
                  placeholder={'-'}
                />
                <div className="w-1/2 text-center truncate">
                  {group.map((c) => c.id === m.away && c.countrie)}
                </div>
              </div>

              <div className="flex">
                <button
                  disabled={m.finished}
                  className="m-auto bg-yellow-200 rounded border-2 border-yellow-300 h-auto p-1 w-full disabled:bg-slate-200 disabled:border-green-200"
                  onClick={() => {
                    handleScore(m.idMatch)
                  }}
                ></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default GroupsCard
