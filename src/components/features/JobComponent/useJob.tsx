// Types
import type { AppDispatch, RootState } from '../../../app/store'
import type { IJobsState, INormalizeJobState } from '@/types/jobTypes'

// Hooks
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../../hooks/useRequestHandlers'

// Reducers
import { addJobs } from '../../../features/jobs/jobsSlice'

const useJob = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const jobsData = useSelector<RootState>((state) => state.jobs) as IJobsState
  const jobData = useSelector<RootState>((state) => state.jobs.byId[id as string]) as INormalizeJobState
  const { loading, requestHandlers } = useRequestHandlers()

  const getJobData = async () => {
    const { res, error } = await requestHandlers({ url: `/job/${id}` })
    if (error) return false
    dispatch(addJobs([res.job]))
  }

  useEffect(() => {
    if (!jobData) getJobData()
  }, [])

  return { jobData, jobsData, loading }
}

export default useJob
