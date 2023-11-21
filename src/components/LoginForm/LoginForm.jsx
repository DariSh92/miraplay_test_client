import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { FormWrapp, Input, Error, Label, SubmitButton, LoginWrapper } from './LoginForm.styled';
import { logIn, setRefreshing } from '../../redux/auth/operations';
import { logInSuccess } from '../../redux/auth/authSlice';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(4, 'Password is too short').max(12, 'Password is too long').required('Password is required'),
});

export const LoginForm = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutation = useMutation(logIn, {
    onSuccess: async (data) => {
        dispatch(logInSuccess());
        console.log('LoginForm.jsx - Login successful', data);
        await queryClient.invalidateQueries('user');
        console.log('Navigating to /games...');
        navigate('/games'); 
    },
  });
  console.log('Component rendered');


const handleSubmit = async (values, { resetForm }) => {
    console.log('LoginForm.jsx - setRefreshing(true)');
    dispatch(setRefreshing(true));
    await mutation.mutateAsync(values);
    resetForm();
  };



  return (
    <LoginWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrapp autoComplete='off'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder='Please, enter your Email'
            required
          />
          <Error name="email" component='div' />

          <Label htmlFor='password'>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder='Please, enter your Password'
            required
          />
          <Error name="password" component='div' />
          <SubmitButton type='submit'>Log in</SubmitButton>
        </FormWrapp>
      </Formik>
    </LoginWrapper>
  );
};


