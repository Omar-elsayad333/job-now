// Types
import { IMeta } from '@/types/globals'
import type { IJob, IJobsState } from '../../types/jobTypes'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IJobsState = {
  byId: {},
  allIds: [],
  meta: {
    count: 0,
    cursor: 0,
    next: 0,
  },
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJobs(state, action: PayloadAction<IJob[]>) {
      action.payload.forEach((job) => {
        state.byId[job.id] = {
          id: job.id,
          title: job.attributes.title,
          skills: job.relationships.skills.map((skill: { id: string }) => skill.id),
        }
        state.allIds.push(job.id)
      })
    },
    querySearch(state, action: PayloadAction<IJob[]>) {
      state.allIds = []
      state.byId = {}
      action.payload.forEach((job) => {
        state.byId[job.id] = {
          id: job.id,
          title: job.attributes.title,
          skills: job.relationships.skills.map((skill: { id: string }) => skill.id),
        }
        state.allIds.push(job.id)
      })
    },
    addMeta(state, action: PayloadAction<number>) {
      state.meta.count = action.payload
    },
    nextCursor(state) {
      state.meta.cursor = +1
    },
  },
})

export const { addJobs, nextCursor, addMeta, querySearch } = jobsSlice.actions
export default jobsSlice.reducer
