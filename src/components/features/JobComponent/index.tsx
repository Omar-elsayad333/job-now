// Types
import { type CSSProperties } from 'react'

// Containers
import useJob from './useJob'

// Components
import RenderJobSkills from '../RenderJobSkills'
import RenderRelatedJobs from './RenderRelatedJobs'

const JobComponent = () => {
  const { jobData, jobsData, loading } = useJob()

  const styles: Record<string, CSSProperties> = {
    conatiner: {
      padding: '50px',
      display: 'flex',
      flexDirection: 'column',
      gap: '54px',
    },
    contentConatiner: {
      display: 'grid',
      gap: '42px',
      gridTemplateColumns: '2fr 1fr',
    },
    skillsSection: {
      display: 'flex',
      gap: '28px',
      flexDirection: 'column',
      background: 'white',
      padding: '30px 40px',
    },
    sideCard: {
      gap: '25px',
      padding: '25px',
      display: 'flex',
      height: 'fit-content',
      flexDirection: 'column',
      backgroundColor: '#D9D9D9',
    },
    sideCardList: {
      paddingLeft: '25px',
      display: 'flex',
      flexDirection: 'column',
      gap: '17px',
    },
  }

  if (loading) return <p>loading...</p>
  if (!jobData || Object.keys(jobData).length === 0) return <p>No Data</p>

  return (
    <div style={styles.conatiner}>
      <h1 className="title">{jobData.title}</h1>
      <div style={styles.contentConatiner}>
        <section style={styles.skillsSection}>
          <p className="sub-title">Related Skills:</p>
          {jobData.skills.map((item) => (
            <RenderJobSkills key={item} id={item} />
          ))}
        </section>
        {jobsData?.allIds?.length > 0 && (
          <section style={styles.sideCard}>
            <p className="sub-title">Related Jobs:</p>
            <ul style={styles.sideCardList}>
              {jobsData.allIds.map((itemId) => (
                <RenderRelatedJobs key={itemId} id={itemId} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}

export default JobComponent
