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
const CourseList = () => {
    const dispatch = useDispatch()

    const courses = useSelector<RootState, CourseData[] | null>((state) => {
        return state.course.courses
    })

    console.log(courses)

    useEffect(() => {
        dispatch<any>(fetchCourses())
    },[])


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
            <span>Remove</span>
          </HeaderBlock>
        </CourseListHeader>
        { courses && courses.map((course) => {
        return <CourseItem key={course.id} courseItem={course} />;
      })}
      <AddButton>
        +
      </AddButton>
      </CourseListContainer>
    )
}

export default CourseList