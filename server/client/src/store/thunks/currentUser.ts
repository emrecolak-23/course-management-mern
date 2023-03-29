import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async () => {
    const response = await axios.get('http://localhost:3000/api/users/currentuser', {
        withCredentials: true
    })
    return response.data
  }
)