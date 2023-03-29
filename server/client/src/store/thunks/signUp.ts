import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'
type FormValue = {
    displayName: string,
    email: string,
    password: string
}

export const signUp = createAsyncThunk(
  'users/signUp',
  async (formValues: FormValue) => {
    const response = await api.post('/api/users/signup', formValues, {
       withCredentials: true
    })
    return response.data
  }
)