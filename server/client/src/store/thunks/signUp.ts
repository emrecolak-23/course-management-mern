import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserData } from '../slices/auth-slice'
import axios from 'axios'

type FormValue = {
    displayName: string,
    email: string,
    password: string
}

export const signUp = createAsyncThunk(
  'users/signUp',
  async (formValues: FormValue) => {
    const response = await axios.post('http://localhost:3000/api/users/signup', formValues, {
       withCredentials: true
    })
    return response.data
  }
)