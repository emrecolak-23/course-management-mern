import { createSlice } from "@reduxjs/toolkit";
import {fetchCourses} from '../thunks/fetchCourses'
import { deleteCourse } from "../thunks/deleteCourse";
export type CourseData = {
    id: string,
    name: string,
    description: string,
    category: string,
    price: string,
}

interface INITIAL_STATE {
    courses: CourseData[] | null,
    isLoading: boolean
    error: string | null | undefined
}

const initialState: INITIAL_STATE = {
    courses: null,
    isLoading: false,
    error: null
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCourses.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchCourses.fulfilled, (state, action) => {
            state.isLoading = false
            state.courses = action.payload;
        });
        builder.addCase(fetchCourses.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(deleteCourse.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(deleteCourse.fulfilled, (state, action) => {
            state.isLoading = false
            const index = state.courses!.indexOf(action.payload);
            state.courses!.splice(index, 1);
        });
        builder.addCase(deleteCourse.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
    
})

export const courseReducer = courseSlice.reducer
