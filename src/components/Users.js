import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MundialContext } from '../context/mundialContext'

const Users = () => {
  const { players } = useContext(MundialContext)
  const { setPlayers } = useContext(MundialContext)
  const { handlePlayersName } = useContext(MundialContext)

  return (
    <div>
      <div className="flex">
        <div className="">
          Ingrese los usuarios
          {players.map((p) => (
            <div key={p.id} className="flex my-1">
              <div className="h-auto w-12 bg-lime-200 text-center">{p.id}</div>
              <input
                onChange={(e) => {
                  handlePlayersName(p.id, e.target.value)
                }}
                type="text"
                name={p.id}
                className="border-2 border-gray-400 rounded"
                placeholder={p.player}
              />
            </div>
          ))}
        </div>
        <div>
          <Link to={'/gc'}>Listo</Link>
        </div>
      </div>
    </div>
  )
}

export default Users
