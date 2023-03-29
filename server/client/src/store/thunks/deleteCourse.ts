import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'
export const deleteCourse = createAsyncThunk(
  'course/deleteCourse',
  async (id:string) => {
    const response = await api.delete(`/api/courses/${id}`, {
        withCredentials: true
    })
    return response.data
  }
)