import {
    CourseListContainer,
    CourseListHeader,
    HeaderBlock,
    AddButton
  } from './course-list.styles';

  import { useDispatch } from 'react-redux';
  import { fetchCourses } from '../../store/thunks/fetchCourses';
  import { useEffect } from 'react';
  import { useSelector } from 'react-redux';
  import { CourseData } from '../../store/slices/course-slice';
  import { RootState } from '../../store';
  import CourseItem from '../course-item/course-item.component';

  import { useNavigate } from 'react-router-dom';
const CourseList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const courses = useSelector<RootState, CourseData[]>((state) => {
        return state.course.courses
    })


    useEffect(() => {
        dispatch<any>(fetchCourses())
    },[])

    const routeAddCourse = () => {
        navigate('/course')
    }

    return (
        <CourseListContainer>
        <CourseListHeader>
          <HeaderBlock>
            <span>Name</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Category</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Operation</span>
          </HeaderBlock>
        </CourseListHeader>
        { courses.length == 0 ? 'No stored course' : courses.map((course) => {
        return <CourseItem key={course.id} courseItem={course} />;
      })}
      <AddButton onClick={routeAddCourse}>
        +
      </AddButton>
      </CourseListContainer>
    )
}

export default CourseList