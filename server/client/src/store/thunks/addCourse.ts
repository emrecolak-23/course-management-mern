import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'

type FormValue = {
    name: string,
    description: string
    category: string,
    price: number
}

export const addCourse = createAsyncThunk(
  'course/addCourse',
  async (formValue:FormValue) => {
    const response = await api.post(`/api/courses`, formValue, {
        withCredentials: true
    })
    return response.data
  }
)