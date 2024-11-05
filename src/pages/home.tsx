// Types
import { type CSSProperties } from 'react'
import { type RootState } from '../app/store'

// Components
import JobsList from '../features/jobs/JobsList'

// Hooks
import { useSelector } from 'react-redux'
import useInfintieScroll from '../hooks/useInfintieScroll'

const Home = () => {
  const { elementRef, handleScroll } = useInfintieScroll()
  const jobsCount = useSelector<RootState>((state) => state.jobs.meta.count)

  const styles: Record<string, CSSProperties> = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '57px',
      padding: '30px 50px',
    },
    contentContainer: {
      display: 'grid',
      gap: '31px',
      gridTemplateColumns: '1fr 1fr',
      ...(window.matchMedia('(max-width: 700px)').matches && {
        gridTemplateColumns: '1fr',
      }),
    },
  }

  return (
    <div style={styles.container}>
      <p className="title" style={{ marginBottom: '27px' }}>
        All Jobs ({`${jobsCount}`})
      </p>
      <section style={styles.contentContainer} ref={elementRef} onScrollCapture={handleScroll}>
        <JobsList />
      </section>
    </div>
  )
}

export default Home
