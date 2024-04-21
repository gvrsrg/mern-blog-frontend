import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


import styles from './Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth)

  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState:{ errors, isValid }, 
  } = useForm({
    defaultValues: {
      fullName: 'Basil  Poupkine',
      email: 'bpoup@gmail.com',
      password: '12345' 
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values))
    if (!data.payload) {
      alert('Wrong login or password')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } else {
      alert('Wrong login or password')
    }


  }

  if (isAuth) {
    return <Navigate to="/"/>
  }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Полное имя" fullWidth />
      <TextField className={styles.field} label="E-Mail" fullWidth />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};
