// Types
import type { ISkill, ISkillsState } from '../../types/skillTypes'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ISkillsState = {
  byId: {},
  allIds: [],
}

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill(state, action: PayloadAction<ISkill>) {
      state.byId[action.payload.id] = {
        name: action.payload.attributes.name,
        type: action.payload.attributes.type,
        level: action.payload.attributes.level,
        importance: action.payload.attributes.importance,
      }
      state.byId[action.payload.id].jobsRelationships = action.payload.relationships.jobs.map((job) => job.id)
      state.byId[action.payload.id].skillsRelationships = action.payload.relationships.skills.map((skill) => skill.id)
      state.allIds.push(action.payload.id)
    },
  },
})

export const { addSkill } = skillsSlice.actions
export default skillsSlice.reducer
