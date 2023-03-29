import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'

type UpdateValues = {
    id: string,
    name: string,
    description: string,
    category: string,
    price: number
}

export const updateCourse = createAsyncThunk(
  'course/updateCourse',
  async (updateValues:UpdateValues) => {
    const response = await api.put(`/api/courses/${updateValues.id}`, 
    {
        name: updateValues.name, 
        description: updateValues.description,
        category: updateValues.category,
        price: updateValues.price
}, {
        withCredentials: true
    })
    return response.data
  }
)