// Containers
import useJobs from './useJobs'

// Components
import RenderJob from '../../components/features/RenderJob'

const JobsList = () => {
  const { jobs, jobsIds, loading, fetching } = useJobs()

  if (loading) return <h1>loading...</h1>

  return (
    <>
      {jobsIds.length > 0 &&
        Object.keys(jobs).length > 0 &&
        jobsIds.map((jobId: string) => <RenderJob key={jobId} jobData={jobs[jobId]} />)}
      {fetching && <p>Loading...</p>}
    </>
  )
}

export default JobsList
