import { UpdateCourseContainer } from "./update-course-form.styles";
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import axios from "axios";

import { FormEvent, useState, useEffect } from 'react';

import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateCourse } from "../../store/thunks/updateCourse";
import { useNavigate, useParams } from 'react-router-dom';

type CourseRouteParam = {
    id: string
}

const UpdateCourseForm = () => {
    const {id} = useParams<keyof CourseRouteParam>() as CourseRouteParam

   
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [formField, setFormField] = useState({
        id: '',
        name: '',
        description: '',
        category: '',
        price: 0
    })

    const {name, description, category, price } = formField

    useEffect(() => {
        axios.get(`http://localhost:3000/api/courses/${id}`, {
            withCredentials: true
        }).then(result => {
            setFormField(result.data)
        })
    }, [id])


    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
       
        setFormField({ ...formField, [name]: value });
      };
    
      const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch<any>(updateCourse(formField))
        navigate('/')
      }

    return <UpdateCourseContainer>
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
                    <Button type="submit">Update</Button>
    </form>
    </UpdateCourseContainer>
}

export default UpdateCourseForm