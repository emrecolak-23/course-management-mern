import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../apis/api'

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async () => {
    const response = await api.get('/api/users/currentuser', {
        withCredentials: true
    })
    return response.data
  }
)