import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type FormValue = {
    email: string,
    password: string
}

export const signIn = createAsyncThunk(
  'users/signIn',
  async (formValues: FormValue) => {
    const response = await axios.post('http://localhost:3000/api/users/signin', formValues, {
       withCredentials: true
    })
    return response.data
  }
)