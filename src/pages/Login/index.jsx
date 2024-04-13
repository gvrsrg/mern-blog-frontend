import React from "react";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm  } from "react-hook-form";

import styles from "./Login.module.scss";

import axios from "../../axios"
import { fetchAuth } from "../../redux/slices/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState:{ errors, isValid }, 
  } = useForm({
    defaultValues: {
      email: "test3@test2.com",
      password: "123" 
    },
  })

  const onSubmit = (values) => {
    dispatch(fetchAuth(values))
  }

  console.log(errors, isValid);

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Account login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="E-Mail"
        error = {errors.email ? true : false}
        helperText= {errors.email?.message}
        type="email"
        {...register( 'email', { required: 'Enter email' } )}
        fullWidth
      />
      <TextField 
        className={styles.field} 
        label="Password" 
        error = {errors.passwors ? true : false}
        helperText= {errors.password?.message}
        {...register( 'password', { required: 'Enter password' } )}
        fullWidth 
      />
      <Button type="submit" size="large" variant="contained" fullWidth>
        Enter
      </Button>
      </form>
    </Paper>
  );
};
