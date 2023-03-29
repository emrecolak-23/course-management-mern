import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const deleteCourse = createAsyncThunk(
  'course/deleteCourse',
  async (id:string) => {
    const response = await axios.delete(`http://localhost:3000/api/courses/${id}`, {
        withCredentials: true
    })
    return response.data
  }
)