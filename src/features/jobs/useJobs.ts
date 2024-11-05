// Types
import type { AppDispatch, RootState } from '@/app/store'

// Reducers
import { addJobs, addMeta } from './jobsSlice'

// Hooks
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useRequestHandlers from '../../hooks/useRequestHandlers'

const useJobs = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, fetching, requestHandlers } = useRequestHandlers()
  const jobs = useSelector((state: RootState) => state.jobs.byId)
  const jobsMeta = useSelector((state: RootState) => state.jobs.meta)
  const jobsIds = useSelector((state: RootState) => state.jobs.allIds)

  const getJobs = async () => {
    const { error, res } = await requestHandlers({
      name: 'jobs',
      url: '/jobs',
      ...(jobsMeta.cursor && { params: { cursor: jobsMeta.cursor } }),
    })
    if (error) return false

    dispatch(addJobs(res.jobs))
    dispatch(addMeta(res.meta.count))
  }

  useEffect(() => {
    getJobs()
  }, [jobsMeta.cursor])

  return { jobs, jobsIds, loading, fetching }
}

export default useJobs
