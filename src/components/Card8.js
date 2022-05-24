import React, { useContext, useEffect } from 'react'
import { MundialContext } from '../context/mundialContext'
const Card8 = ({ match, i }) => {
  const { handleMatchesOf8 } = useContext(MundialContext)
  const { in8 } = useContext(MundialContext)
  const { readyToSemifinals } = useContext(MundialContext)
  return (
    <div className="border-2 border-gray-400 m-auto my-2 w-96 p-2 rounded-md">
      <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Partido {i + 1}/4 </p>
      </div>
      <div className="">
        <div className="">
          <div className="flex">
            <div className="w-1/2 flex">
              <div className="w-1/2 text-center truncate">
                {in8.map((t, i) => i + 1 === match.homeI && t.countrie)}
              </div>

              <input
                onChange={(e) => {
                  handleMatchesOf8(match, e.target.value, match.awayScore)
                  readyToSemifinals()
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
            </div>
            <div className="w-1/2 flex">
              <input
                onChange={(e) => {
                  handleMatchesOf8(match, match.homeScore, e.target.value)
                  readyToSemifinals()
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
              <div className="w-1/2 text-center truncate">
                {in8.map((t, i) => i + 1 === match.awayI && t.countrie)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card8
