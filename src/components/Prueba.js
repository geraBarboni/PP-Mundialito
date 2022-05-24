import React, { useContext, useEffect } from 'react'
import { MundialContext } from '../context/mundialContext'
const Prueba = () => {
  const { groups } = useContext(MundialContext)
  const { players } = useContext(MundialContext)
  //const { setPlayers } = useContext(MundialContext)
  useEffect(() => {
    //console.log(groups)
  }, [])

  return <div className="flex">Prueba</div>
}

export default Prueba
