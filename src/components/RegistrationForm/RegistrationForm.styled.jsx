import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';


export const Fromwrapper = styled.div`
margin-top: 35px;
margin-left: auto;
margin-right: auto;
background-color: black;
width: 475px;
height: 500px;
border: 1px solid black;
boder-radius: 20px;
background: rgb(8,8,17);
background: linear-gradient(90deg, rgba(8,8,17,1) 0%, rgba(4,8,3,1) 0%, rgba(39,107,39,1) 28%, rgba(29,29,31,1) 100%);
`;

export const FormRegisterWrapp = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
    
`;

export const InputRegister = styled(Field)`
    font-size: 16px;
    width: 300px;
    height: 30px;
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 5px;
    outline-color: #34c734;
    border-color: black;
    font-weight: 700;
`;

export const ErrorRegister = styled(ErrorMessage)`
    display: flex;
    width: 300px;
    text-align: center;
    color: red;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 16px;      
`;

export const LabelRegister = styled.label`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;
    color: white;
`;

export const SubmitButtonRegister = styled.button`
    width: 150px;
    height: 40px;
    background-color: #34c734;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    outline-color: #34c734;
    `;