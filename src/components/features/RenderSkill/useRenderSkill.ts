// Types
import type { AppDispatch, RootState } from '@/app/store'

// Reducer
import { addSkill } from '../../../features/skills/skillsSlice'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

const useRednerSkill = (skillId: string) => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, requestHandlers } = useRequestHandlers()
  const skill: any = useSelector<RootState>((state) => state.skills.byId[skillId])

  const getSkillData = async () => {
    const { res, error } = await requestHandlers({ url: `/skill/${skillId}` })
    if (error) return false
    dispatch(addSkill(res.skill))
  }

  useEffect(() => {
    // Check if the skill is already cached in the store
    !skill && getSkillData()
  }, [])

  return { skill, loading }
}

export default useRednerSkill
