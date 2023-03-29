import { createSlice } from "@reduxjs/toolkit";
import {fetchCourses} from '../thunks/fetchCourses'
import { deleteCourse } from "../thunks/deleteCourse";
import { addCourse } from "../thunks/addCourse";
import { fetchCourse } from "../thunks/fetchCourse";
import { updateCourse } from "../thunks/updateCourse";
export type CourseData = {
    id: string,
    name: string,
    description: string,
    category: string,
    price: number,
}

interface INITIAL_STATE {
    courses: CourseData[],
    course: CourseData,
    isLoading: boolean
    error: string | null | undefined
}

const initialState: INITIAL_STATE = {
    courses: [],
    course: {
        id: '',
        name: '',
        description: '',
        category: '',
        price: 0
    },
    isLoading: false,
    error: null
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        updateCourse(course) {
            
        }
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
        builder.addCase(addCourse.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(addCourse.fulfilled, (state, action) => {
            state.isLoading = false
            state.courses.push(action.payload)
        });
        builder.addCase(addCourse.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(fetchCourse.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchCourse.fulfilled, (state, action) => {
            state.isLoading = false
            state.course = action.payload
        });
        builder.addCase(fetchCourse.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(updateCourse.pending, (state, action) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(updateCourse.fulfilled, (state, action) => {
            state.isLoading = false
            const index = state.courses!.indexOf(state.course);
            state.courses.splice(index, 1, action.payload)
        });
        builder.addCase(updateCourse.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
    
})

export const courseReducer = courseSlice.reducer
