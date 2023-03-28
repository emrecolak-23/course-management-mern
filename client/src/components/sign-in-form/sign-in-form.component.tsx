import {SignInContainer, ButtonContainer}  from  './sign-in-form.styles';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { useState, ChangeEvent, FormEvent } from 'react';
const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
   }

   const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

   return <SignInContainer>
    <h2>Already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
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
        <Button type="submit">Sign In</Button>
    </form>
   </SignInContainer>
}

export default SignInForm