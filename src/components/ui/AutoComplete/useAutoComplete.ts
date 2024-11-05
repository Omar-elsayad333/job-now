// Hooks
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useRequestHandlers from '../../../hooks/useRequestHandlers'
import { type ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

// Types
import type { AppDispatch } from '../../../app/store'

// Utils
import { debounce } from '../../../utils/debounce'

// Reducers
import { addMeta, querySearch } from '../../../features/jobs/jobsSlice'

// Routes
import { Routes } from '../../../routes/routes'

const useAutoComplete = () => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState([])
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const searchRef = useRef<HTMLInputElement>(null)
  const { requestHandlers, loading } = useRequestHandlers()

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    debouncedOnChange(value)
  }, [])

  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      if (value.length === 0) {
        setOpen(false)
        navigate(Routes.home)
      }

      if (value.length > 2) {
        navigate(`${Routes.search}?query=${value}`)
        searchQuery(value)
      }
    }),
    []
  )

  const searchQuery = async (value: string) => {
    const { res, error } = await requestHandlers({ url: '/jobs/search', params: { query: value } })
    if (error) return false
    setMenu(res.jobs)
    if (res.jobs.length > 0) {
      dispatch(querySearch(res.jobs))
      dispatch(addMeta(res.meta.count))
    }
    setOpen(value ? true : false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!searchRef.current) return false
    if (event.target !== searchRef.current) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return { searchRef, onChange, menu, open, loading }
}

export default useAutoComplete
