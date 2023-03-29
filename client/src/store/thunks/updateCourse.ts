import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type UpdateValues = {
    id: string,
    name: string,
    description: string,
    category: string,
    price: string
}

export const updateCourse = createAsyncThunk(
  'course/updateCourse',
  async (updateValues:UpdateValues) => {
    const response = await axios.put(`http://localhost:3000/api/courses/${updateValues.id}`, 
    {
        name: updateValues.name, 
        description: updateValues.description,
        category: updateValues.category,
        price: updateValues.price
}, {
        withCredentials: true
    })
    console.log(response.data)
    return response.data
  }
)