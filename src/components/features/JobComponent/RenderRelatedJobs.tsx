// Types
import type { AppDispatch, RootState } from '@/app/store'
import { INormalizeJobState } from '../../../types/jobTypes'

// Reducer
import { addJobs } from '../../../features/jobs/jobsSlice'

// Routes
import { Routes } from '../../../routes/routes'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Components
import { Link, useParams } from 'react-router-dom'

const RenderRelatedJobs = ({ id }: { id: string }) => {
  const { id: jobId } = useParams()
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

  return (
    <>
      {jobData && jobId !== id && (
        <li>
          <Link to={Routes.job.replace(':id', jobData.id)}>{jobData.title}</Link>
        </li>
      )}
    </>
  )
}

export default RenderRelatedJobs
