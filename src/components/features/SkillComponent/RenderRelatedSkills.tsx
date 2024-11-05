// Types
import type { AppDispatch, RootState } from '@/app/store'
import type { INormalizeSkillState } from '@/types/skillTypes'

// Reducer
import { addSkill } from '../../../features/skills/skillsSlice'

// Routes
import { Routes } from '../../../routes/routes'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Components
import { Link, useParams } from 'react-router-dom'

const RenderRelatedSkills = ({ id }: { id: string }) => {
  const { id: skillId } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const skillData = useSelector<RootState>((state) => state.skills.byId[id]) as INormalizeSkillState
  const { requestHandlers } = useRequestHandlers()

  const getData = async () => {
    const { res, error } = await requestHandlers({ url: `skill/${id}` })
    if (error) return false
    dispatch(addSkill(res.skill))
  }

  useEffect(() => {
    if (!skillData) getData()
  }, [])

  return (
    <>
      {skillData && id !== skillId && (
        <li>
          <Link to={Routes.skill.replace(':id', id)}>{skillData.name}</Link>
        </li>
      )}
    </>
  )
}

export default RenderRelatedSkills
