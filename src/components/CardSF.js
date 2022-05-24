import React, { useContext } from 'react'
import { MundialContext } from '../context/mundialContext'

const CardSF = ({ match, i }) => {
  const { handleMatchesOfSF } = useContext(MundialContext)
  const { inSF } = useContext(MundialContext)
  const { readyToFinals } = useContext(MundialContext)

  return (
    <div className="border-2 border-gray-400 m-auto my-2 w-96 p-2 rounded-md">
      <div className="w-full border-b-2 border-gray-300">
        <p className="text-xl text-center">Partido {i + 1}/2 </p>
      </div>
      <div className="">
        <div className="">
          <div className="flex">
            <div className="w-1/2 flex">
              <div className="w-1/2 text-center truncate">
                {inSF.map((t, i) => i + 1 === match.homeI && t.countrie)}
              </div>

              <input
                onChange={(e) => {
                  handleMatchesOfSF(match, e.target.value, match.awayScore)
                  readyToFinals()
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
            </div>
            <div className="w-1/2 flex">
              <input
                onChange={(e) => {
                  handleMatchesOfSF(match, match.homeScore, e.target.value)
                  readyToFinals()
                }}
                className="w-1/2 text-center"
                placeholder={'-'}
              />
              <div className="w-1/2 text-center truncate">
                {inSF.map((t, i) => i + 1 === match.awayI && t.countrie)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSF
