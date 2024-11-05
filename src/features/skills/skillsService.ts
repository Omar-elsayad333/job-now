import axiosInstance from '../../config/axios'
import { AppDispatch } from '../../app/store'
import { addSkill } from './skillsSlice'
import { ISkill } from '../../types/skillTypes'

export const loadSkills = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.get<{ data: { skill: ISkill } }>('/skill')
    dispatch(addSkill(response.data.data.skill))
  } catch (error) {
    console.error('Failed to load skills:', error)
  }
}
