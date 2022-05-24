import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MundialContext } from '../context/mundialContext'
import GroupsCard from './GroupsCard'
import RoundOf16 from './RoundOf16'
import RoundOf8 from './RoundOf8'

const GroupsContainer = () => {
  const { groups } = useContext(MundialContext)
  const { groupsId } = useContext(MundialContext)
  const { passToRoundOf16 } = useContext(MundialContext)
  const [show16, setShow16] = useState(false)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {groupsId.map((idGroups) => (
          <GroupsCard
            group={groups.filter((g) => g.group === idGroups)}
            id={idGroups}
            key={idGroups}
          />
        ))}
      </div>
      <div className="w-full p-5">
        <button
          className="bg-yellow-200
            p-2 
            w-full
            rounded border-2 border-yellow-300 h-auto 
          disabled:bg-slate-200 disabled:border-green-200
            hover:bg-yellow-300
          "
          onClick={() => {
            setShow16(!show16)
            passToRoundOf16()
          }}
        >
          Pasar a octavos de final
        </button>
      </div>
      {show16 && <RoundOf16></RoundOf16>}
    </>
  )
}

export default GroupsContainer
