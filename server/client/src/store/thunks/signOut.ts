import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type FormValue = {
    displayName: string,
    email: string,
    password: string
}

export const singOut = createAsyncThunk(
  'users/singOut',
  async () => {
    const response = await axios.get('http://localhost:3000/api/users/signout', {
       withCredentials: true
    })
    return response.data
  }
)