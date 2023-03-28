import {
    CourseListContainer,
    CourseListHeader,
    HeaderBlock,
  } from './course-list.styles';

const CourseList = () => {
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
            <span>Remove</span>
          </HeaderBlock>
        </CourseListHeader>
      </CourseListContainer>
    )
}

export default CourseList