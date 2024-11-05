// Types
import { type CSSProperties } from 'react'

// Containers
import useJob from './useJob'

// Components
import RenderSkillJobs from '../RenderSkillJobs'
import RenderRelatedSkills from './RenderRelatedSkills'

const SkillComponent = () => {
  const { skillsData, skillData, loading } = useJob()

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
  if (!skillData || Object.keys(skillData).length === 0) return <p>No Data</p>

  return (
    <div style={styles.conatiner}>
      <h1 className="title">{skillData.name}</h1>
      <div style={styles.contentConatiner}>
        <section style={styles.skillsSection}>
          <p className="sub-title">Related Jobs:</p>
          {skillData.jobsRelationships?.map((item) => (
            <RenderSkillJobs key={item} id={item} />
          ))}
        </section>
        {skillData && skillData.skillsRelationships && skillData.skillsRelationships.length > 0 && (
          <section style={styles.sideCard}>
            <p className="sub-title">Related Skills:</p>
            <ul style={styles.sideCardList}>
              {skillData.skillsRelationships.map((itemId) => (
                <RenderRelatedSkills key={itemId} id={itemId} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}

export default SkillComponent
