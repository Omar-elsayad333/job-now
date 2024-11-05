import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { loadSkills } from './skillsService'

const SkillsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSkills())
  }, [dispatch])

  const skills = useSelector((state: RootState) => state.skills.allIds.map((id) => state.skills.byId[id]))

  return (
    <div>
      <h2>Skills List</h2>
      <ul>
        {/* {skills.map((skill) => ( */}
        {/* // <li key=w{skill.id}>{skill.attributes.name}</li> */}
        {/* ))} */}
      </ul>
    </div>
  )
}

export default SkillsList
