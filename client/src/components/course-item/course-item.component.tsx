import {
    CourseItemContainer,
    Name,
    Description,
    Price,
    Category,
    RemoveButton,
  } from './course-item.styles';

  import { CourseData } from '../../store/slices/course-slice';
  import {FC} from 'react'

  import { useDispatch } from 'react-redux';
  import { deleteCourse } from '../../store/thunks/deleteCourse';
  type CheckoutItemProp = {
    courseItem: CourseData
  }


  const CourseItem:FC<CheckoutItemProp> = ({courseItem}) => {
    const dispatch = useDispatch()
    const { name, description ,price, category, id } = courseItem;

    const handleDeleteCourse = () => {
        dispatch<any>(deleteCourse(id))
    }

    return <CourseItemContainer>
    <Name>{name}</Name>
    <Description>
      {description}
    </Description>
    <Price>{price}</Price>
    <Category>
        {category}
    </Category>
    <RemoveButton onClick={handleDeleteCourse}>&#10005;</RemoveButton>
  </CourseItemContainer>
  }

  export default CourseItem