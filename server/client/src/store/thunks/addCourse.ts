import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type FormValue = {
    name: string,
    description: string
    category: string,
    price: number
}

export const addCourse = createAsyncThunk(
  'course/addCourse',
  async (formValue:FormValue) => {
    const response = await axios.post(`http://localhost:3000/api/courses`, formValue, {
        withCredentials: true
    })
    return response.data
  }
)