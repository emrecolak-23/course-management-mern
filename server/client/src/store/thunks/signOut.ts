import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'
type FormValue = {
    displayName: string,
    email: string,
    password: string
}

export const singOut = createAsyncThunk(
  'users/singOut',
  async () => {
    const response = await api.get('/api/users/signout', {
       withCredentials: true
    })
    return response.data
  }
)