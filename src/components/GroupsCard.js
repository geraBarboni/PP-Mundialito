import React, { useContext, useEffect } from 'react'
import { MundialContext } from '../context/mundialContext'
import Points from './Points'

const GroupsCard = ({ group }) => {
  const { players } = useContext(MundialContext)
  const { handleMatches } = useContext(MundialContext)
  const { groupFasesMatches } = useContext(MundialContext)
  const { handleScore } = useContext(MundialContext)
  const { shufflePlayers } = useContext(MundialContext)

  useEffect(() => {
    shufflePlayers(players)
  }, [players])

  return (
    <div className="border-2 border-gray-400 m-auto my-2 w-72 p-2 rounded-md">
      <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Grupo {group.id} </p>
      </div>
      <div className="w-full">
        {group.countries.map((c) => (
          <div key={c.id} className="flex">
            <div className="w-1/3 text-center truncate">{c.countrie}</div>
            <div className="w-1/3 text-center truncate">
              {players.map((p, i) => i + 1 === c.id && p.player)}
            </div>
            <div className="w-1/3 text-center truncate">
              <Points points={c.points} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-b-2  mt-2">
        <p className="text-md text-center">Partidos</p>
      </div>

      <div className="">
        {groupFasesMatches
          .filter((gm) => gm.igGroup === group.id)
          .map((m) => (
            <div key={m.idMatch} className="flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 text-center truncate">
                  {group.countries.map((c) => c.id === m.home && c.countrie)}
                </div>

                <input
                  onChange={(e) => {
                    handleMatches(m, e.target.value, m.awayScore)
                    handleScore(m.idMatch)
                  }}
                  className="w-1/2 text-center"
                  placeholder={m.homeScore}
                />
              </div>
              <div className="w-1/2 flex">
                <input
                  onChange={(e) => {
                    handleMatches(m, m.homeScore, e.target.value)
                    handleScore(m.idMatch)
                  }}
                  className="w-1/2 text-center"
                  placeholder={m.awayScore}
                />
                <div className="w-1/2 text-center truncate">
                  {group.countries.map((c) => c.id === m.away && c.countrie)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default GroupsCard

/*
    <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Grupo {group.id} </p>
      </div>
      <div className="w-full">
        {group.countries.map((c) => (
          <div key={c.id} className="flex">
            <div className="w-1/3 text-center truncate">{c.countrie}</div>
            <div className="w-1/3 text-center truncate">
              {players.map((p, i) => i + 1 === c.id && p.player)}
            </div>
            <div className="w-1/3 text-center truncate">
              <Points id={c.id} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-b-2  mt-2">
        <p className="text-md text-center">Partidos</p>
      </div>

      <div className="">
        {groupFasesMatches
          .filter((gm) => gm.igGroup === group.id)
          .map((m) => (
            <div key={m.idMatch} className="flex">
              <div className="w-1/2 flex">
                <div className="w-1/2 text-center truncate">
                  {group.countries.map((c) => c.id === m.home && c.countrie)}
                </div>

                <input
                  onChange={(e) =>
                    handleMatches(m, e.target.value, m.awayScore)
                  }
                  className="w-1/2 text-center"
                  placeholder={m.homeScore}
                />
              </div>
              <div className="w-1/2 flex">
                <input
                  onChange={(e) =>
                    handleMatches(m, m.homeScore, e.target.value)
                  }
                  className="w-1/2 text-center"
                  placeholder={m.awayScore}
                />
                <div className="w-1/2 text-center truncate">
                  {group.countries.map((c) => c.id === m.away && c.countrie)}
                </div>
              </div>
            </div>
          ))}
      </div>
*/
