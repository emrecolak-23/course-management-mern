import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCourses = createAsyncThunk(
  'course/fetchCourses',
  async () => {
    const response = await axios.get('http://localhost:3000/api/courses', {
        withCredentials: true
    })
    return response.data
  }
)