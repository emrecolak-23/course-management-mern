import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCourse = createAsyncThunk(
  'course/fetchCourse',
  async (id: string) => {
    const response = await axios.get(`http://localhost:3000/api/courses/${id}`, {
        withCredentials: true
    })
    return response.data
  }
)