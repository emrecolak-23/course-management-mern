import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'

export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async () => {
    const response = await api.get('/api/courses', {
        withCredentials: true
    })
    return response.data
  }
)