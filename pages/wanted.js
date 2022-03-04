import Layout from '../components/Layout';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function Wanted() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  return (
    <Layout>
      <h1>דרושים</h1>
      <FormWrapper
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      >
        <h2>השאירו פרטים ונחזור אליכם</h2>
        <input
          {...register('firstName')}
          type="text"
          placeholder="שם פרטי ושם משפחה"
        />
        <input
          {...register('phoneNumber')}
          type="tel"
          placeholder="מספר טלפון"
        />
        <textarea {...register('aboutYou')} placeholder="הסבר פנייתכם" />

        <button type="submit">השאר פרטים</button>
      </FormWrapper>
    </Layout>
  );
}
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input,
  textarea {
    border-radius: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    display: block;
    padding: 10px 15px;
    margin-bottom: 15px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid white;
  }
  button[type='submit'],
  .button {
    position: relative;
    background: #189ab4;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
  }
`;
