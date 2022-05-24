import React, { useContext } from 'react'
import { MundialContext } from '../context/mundialContext'

const CardF = ({ match, i }) => {
  const { handleMatchesOfF } = useContext(MundialContext)
  const { inF } = useContext(MundialContext)

  return (
    <div className="border-2 border-gray-400 m-auto my-2 w-96 p-2 rounded-md">
      <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Final</p>
      </div>
      <div className="">
        <div className="">
          <div className="flex">
            <div className="w-1/2 flex">
              <div className="w-1/2 text-center truncate">
                {inF.map((t, i) => i + 1 === match.homeI && t.countrie)}
              </div>

              <input
                onChange={(e) => {
                  handleMatchesOfF(match, e.target.value, match.awayScore)
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
            </div>
            <div className="w-1/2 flex">
              <input
                onChange={(e) => {
                  handleMatchesOfF(match, match.homeScore, e.target.value)
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
              <div className="w-1/2 text-center truncate">
                {inF.map((t, i) => i + 1 === match.awayI && t.countrie)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardF
