import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 m-auto">
        <Link to={'/users'}>
          <button className="bg-yellow-200 border-2 border-yellow-400 rounded m-4 h-72 w-72">
            Aleatorio
          </button>
        </Link>
        <Link
          className="cursor-default"
          to={'/'}
          onClick={(e) => e.preventDefault()}
        >
          <button
            disabled
            className="bg-gray-200 border-2 border-gray-400 rounded m-4 h-72 w-72"
          >
            Elejir equipos
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
