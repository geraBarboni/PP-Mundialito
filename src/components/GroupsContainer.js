import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MundialContext } from '../context/mundialContext'
import GroupsCard from './GroupsCard'

const GroupsContainer = () => {
  const { groups } = useContext(MundialContext)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Link to={'/prueba'}>Listo</Link>
      {groups.map((g) => (
        <GroupsCard group={g} key={g.id} />
      ))}
    </div>
  )
}

export default GroupsContainer
