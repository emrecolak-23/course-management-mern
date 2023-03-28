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

  type CheckoutItemProp = {
    courseItem: CourseData
  }


  const CourseItem:FC<CheckoutItemProp> = ({courseItem}) => {

    const { name, description ,price, category } = courseItem;

    const handleDeleteCourse = () => {

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