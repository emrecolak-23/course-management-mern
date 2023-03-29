import { Routes, Route } from 'react-router-dom';
import UpdateCourse from '../update-course/update-course.component';
import AddCourse from '../add-course/add-course.component';
const Course = () =>{
    return <Routes>
        <Route index element={<AddCourse />} />
        <Route path=':id' element={<UpdateCourse />} />
    </Routes>
}

export default Course