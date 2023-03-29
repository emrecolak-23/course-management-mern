import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'
type FormValue = {
    email: string,
    password: string
}

export const signIn = createAsyncThunk(
  'users/signIn',
  async (formValues: FormValue) => {
    const response = await api.post('/api/users/signin', formValues, {
       withCredentials: true
    })
    return response.data
  }
)