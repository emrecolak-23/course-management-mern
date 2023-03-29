import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'
export const fetchCourse = createAsyncThunk(
  'course/fetchCourse',
  async (id: string) => {
    const response = await api.get(`/api/courses/${id}`, {
        withCredentials: true
    })
    return response.data
  }
)