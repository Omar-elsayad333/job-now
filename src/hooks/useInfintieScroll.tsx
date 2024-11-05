// Types
import { type AppDispatch } from '../app/store'

// Reducers
import { nextCursor } from '../features/jobs/jobsSlice'

// Hooks
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

const useInfintieScroll = () => {
  const elementRef = useRef<any>()
  const dispatch = useDispatch<AppDispatch>()

  const handleScroll = () => {
    const container = elementRef.current
    if (!container) return

    const scrollTop = container.scrollTop
    const scrollHeight = container.scrollHeight
    const clientHeight = container.clientHeight

    // Check if the user has reached the end of the scroll
    if (scrollHeight - scrollTop < clientHeight + 10) {
      dispatch(nextCursor())
    }
  }

  return { elementRef, handleScroll }
}

export default useInfintieScroll
