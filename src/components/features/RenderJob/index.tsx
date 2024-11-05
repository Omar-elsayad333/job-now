// Types
import { type CSSProperties } from 'react'
import type { INormalizeJobState } from '../../../types/jobTypes'

// Routes
import { Routes } from '../../../routes/routes'

// Components
import { Link } from 'react-router-dom'
import RenderSkill from '../RenderSkill'
import Card from '../../../components/ui/Card'
import CardTitle from '../../../components/ui/Card/CardTitle'
import CardBody from '../../../components/ui/Card/CardBody'
import CardFooter from '../../../components/ui/Card/CardFooter'

interface JobItemProps {
  jobData: INormalizeJobState
}

const RenderJob: React.FC<JobItemProps> = ({ jobData }) => {
  const styles: Record<string, CSSProperties> = {
    cardBody: {
      display: 'flex',
      flexDirection: 'column',
      gap: '13px',
    },
    skillsContainer: {
      display: 'flex',
      rowGap: '7px',
      columnGap: '10px',
      flexWrap: 'wrap',
    },
  }

  return (
    <Card style={{ gap: '30px', backgroundColor: '#fff' }}>
      <CardTitle>{jobData.title}</CardTitle>
      <CardBody style={styles.cardBody}>
        <p className="paragraph">Related Skills:</p>
        <div style={styles.skillsContainer}>
          {jobData.skills.map((skillId) => (
            <Link to={Routes.skill.replace(':id', skillId)} style={{ textDecoration: 'none' }} key={skillId}>
              <RenderSkill {...{ skillId }} />
            </Link>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Link to={Routes.job.replace(':id', jobData.id)} className="paragraph">
          View Job details
        </Link>
      </CardFooter>
    </Card>
  )
}

export default RenderJob
