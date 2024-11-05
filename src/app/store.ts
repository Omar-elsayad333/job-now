import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from '../features/jobs/jobsSlice'
import skillsReducer from '../features/skills/skillsSlice'

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    skills: skillsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
