// Types
import type { AppDispatch, RootState } from '../../../app/store'
import type { INormalizeSkillState } from '../../../types/skillTypes'

// Components
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import CardBody from '../../ui/Card/CardBody'
import CardTitle from '../../ui/Card/CardTitle'

// Reducers
import { addSkill } from '../../../features/skills/skillsSlice'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Routes
import { Routes } from '../../../routes/routes'

const RenderJobSkills = ({ id }: { id: string }) => {
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

  if (!skillData) return <></>

  return (
    <Card style={{ background: '#F0F0F0', gap: '24px' }}>
      <CardTitle>
        <Link to={Routes.skill.replace(':id', id)}>{skillData.name}</Link>
      </CardTitle>
      <CardBody style={{ display: 'flex', columnGap: '100px', rowGap: '20px', flexWrap: 'wrap' }}>
        <p>
          <span style={{ fontWeight: '700' }}>Type: </span>
          {skillData.type}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Importance: </span>
          {skillData.importance}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Level: </span>
          {skillData.level}
        </p>
      </CardBody>
    </Card>
  )
}

export default RenderJobSkills
