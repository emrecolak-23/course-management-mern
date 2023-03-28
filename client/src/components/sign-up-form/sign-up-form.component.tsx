import {SignUpContainer}  from './sign-up-form.styles';
import { useState, ChangeEvent, FormEvent } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useDispatch } from 'react-redux'
import { signUp } from '../../store';

interface FormValue {
    displayName: string
    email: string
    password: string,
}

const defaultFormFields:FormValue = {
    displayName: '',
    email: '',
    password: '',
};

const SignUpForm = () => {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState<FormValue>(defaultFormFields);
    const { displayName, email, password } = formFields;
    
       
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

     
        dispatch<any>(signUp(formFields))

        resetFormFields()
        
    }

    return <SignUpContainer>
        <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
       
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
}

export default SignUpForm