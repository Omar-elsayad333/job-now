// Types
import type { INormalizeJobState } from '@/types/jobTypes'
import type { AppDispatch, RootState } from '../../../app/store'

// Components
import Card from '../../ui/Card'
import { Link } from 'react-router-dom'
import CardBody from '../../ui/Card/CardBody'
import CardTitle from '../../ui/Card/CardTitle'

// Reducers
import { addJobs } from '../../../features/jobs/jobsSlice'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Routes
import { Routes } from '../../../routes/routes'

const RenderSkillJobs = ({ id }: { id: string }) => {
  const dispatch = useDispatch<AppDispatch>()
  const jobData = useSelector<RootState>((state) => state.jobs.byId[id]) as INormalizeJobState
  const { requestHandlers } = useRequestHandlers()

  const getData = async () => {
    const { res, error } = await requestHandlers({ url: `job/${id}` })
    if (error) return false
    dispatch(addJobs([res.job]))
  }

  useEffect(() => {
    if (!jobData) getData()
  }, [])

  if (!jobData) return <></>

  return (
    <Card style={{ background: '#F0F0F0', gap: '24px' }}>
      <CardTitle>
        <Link to={Routes.job.replace(':id', id)}>{jobData.title}</Link>
      </CardTitle>
    </Card>
  )
}

export default RenderSkillJobs
