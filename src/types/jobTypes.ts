import { IMeta } from './globals'

export interface IJob {
  id: string
  type: string
  attributes: {
    title: string
  }
  relationships: {
    skills: { id: string }[]
  }
}

export interface INormalizeJobState {
  id: string
  title: string
  skills: string[]
}

export interface IJobsState {
  byId: Record<string, INormalizeJobState>
  allIds: string[]
  meta: IMeta
}
