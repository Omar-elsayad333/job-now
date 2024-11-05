import { useState } from 'react'

// Types
import { type AxiosResponse } from 'axios'

// Config
import axiosInstance from '../config/axios'

// Store
import store, { type RootState } from '../app/store'
import { IMeta } from '@/types/globals'

export type TParams = Record<string, string | number>
export interface IProps {
  url: string
  name?: keyof RootState
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  params?: TParams
  noLoading?: boolean
}

const useRequestHandlers = () => {
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(false)

  // Name prop is used to track data if cached or not
  const requestHandlers = async ({ method, url, params, body, noLoading, name }: IProps) => {
    let res, error
    try {
      // Handle loading and fetching state
      if (name && store.getState()[name].allIds.length > 0) {
        setFetching(true)
      } else {
        !noLoading && setLoading(true)
      }

      // Handle request and response
      const response: AxiosResponse = await axiosInstance({
        url,
        params,
        method: method || 'GET',
        ...(body && { data: body }),
      })
      res = response.data
    } catch (err: any) {
      error = err.response.data
    } finally {
      fetching ? setFetching(false) : !noLoading && setLoading(false)
    }
    return { res, error }
  }

  return {
    loading,
    fetching,
    requestHandlers,
  }
}

export default useRequestHandlers
