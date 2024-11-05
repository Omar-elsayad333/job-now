import { RootState } from '../app/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectJobs = (state: RootState) => state.jobs.byId
export const selectSkills = (state: RootState) => state.skills.byId

export const selectJobWithSkills = (jobId: string) =>
  createSelector([selectJobs, selectSkills], (jobs, skills) => ({
    ...jobs[jobId],
    skills: jobs[jobId].skills.map((skillId) => skills[skillId]),
  }))
