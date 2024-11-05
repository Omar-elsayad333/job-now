// Types
import type { AppDispatch, RootState } from '../../../app/store'
import type { INormalizeSkillState, ISkillsState } from '@/types/skillTypes'

// Hooks
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Reducers
import { addSkill } from '../../../features/skills/skillsSlice'

const useSkill = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const skillsData = useSelector<RootState>((state) => state.skills) as ISkillsState
  const skillData = useSelector<RootState>((state) => state.skills.byId[id as string]) as INormalizeSkillState
  const { loading, requestHandlers } = useRequestHandlers()

  const getJobData = async () => {
    const { res, error } = await requestHandlers({ url: `/skill/${id}` })
    if (error) return false
    dispatch(addSkill(res.skill))
  }

  useEffect(() => {
    if (!skillData) getJobData()
  }, [])

  return { skillData, skillsData, loading }
}

export default useSkill
