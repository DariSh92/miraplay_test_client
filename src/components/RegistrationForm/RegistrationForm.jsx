import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom'; 
import { FormRegisterWrapp, InputRegister, ErrorRegister, LabelRegister, SubmitButtonRegister, Fromwrapper } from './RegistrationForm.styled';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../redux/auth/authSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(''),
  password: yup.string().min(6).required(),
});

export const RegisterForm = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const mutation = useMutation(register, {
    onSuccess: async (data) => {
        dispatch(registerSuccess());
        console.log('RegisterForm.jsx - Login successful', data);
        await queryClient.invalidateQueries('user');
        console.log('Navigating to /games...');
        navigate('/games'); 
    },
    onError: (error) => {
      console.error('Registration error', error);
    },
  });

  const handleSubmit = (values, { resetForm }) => {
    mutation.mutate(values);
    resetForm();
  };

  return (
    <Fromwrapper>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormRegisterWrapp autoComplete='off'>
          <LabelRegister htmlFor='email'>E-mail</LabelRegister>
          <InputRegister
            type="email"
            name="email"
            placeholder='Please, enter your E-mail'
            required
          />
          <ErrorRegister name="email" component='div' />

          <LabelRegister htmlFor='password'>Password</LabelRegister>
          <InputRegister
            type="password"
            name="password"
            placeholder='Please, enter your Password'
            required
          />
          <ErrorRegister name="password" component='div' />

          <LabelRegister htmlFor='name'>Name</LabelRegister>
          <InputRegister
            type="name"
            name="name"
            placeholder='Please, enter your Name'
            required
          />
          <ErrorRegister name="name" component='div' />
          <SubmitButtonRegister type='submit'>Register</SubmitButtonRegister>
        </FormRegisterWrapp>
      </Formik>
    </Fromwrapper>
  );
};
