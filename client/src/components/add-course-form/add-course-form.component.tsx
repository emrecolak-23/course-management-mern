import {AddCourseContainer} from './add-course-form.styles'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { FormEvent, useState } from 'react';

import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../store/thunks/addCourse';
import { useNavigate } from 'react-router-dom';
const defaultFormFields = {
    name: '',
    description: '',
    category: '',
    price: 0
}

const AddCourseForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formFields, setFormFields] = useState(defaultFormFields);

    const {name, description, category, price } = formFields


   const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch<any>(addCourse(formFields))
    navigate('/')
  }

    return <AddCourseContainer>
        <h2>Add Course to System</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            />
            <FormInput
            label="Description"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            required
            />
            <FormInput
            label="Category"
            type="text"
            name="category"
            value={category}
            onChange={handleChange}
            required
            />
            <FormInput
            label="Price"
            type="number"
            name="price"
            value={ price== 0 ? '':price}
            onChange={handleChange}
            required
            />
            <Button type="submit">Add</Button>
    </form>
    </AddCourseContainer>
}

export default AddCourseForm