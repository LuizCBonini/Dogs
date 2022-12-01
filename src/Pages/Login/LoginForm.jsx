import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Form/Button/Button'
import Input from '../../Components/Form/Input/Input'

// Hooks
import useForm from '../../Hooks/useForm'

const LoginForm = () => {

  const username = useForm('email');
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
      }).then(response => {
        console.log(response);
        return response.json()
      }).then((json) => {
        console.log(json)
      })
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type='email' name='username' {...username}/>
        <Input label="Senha" type='password' name='password' {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastrar</Link>
    </div>
  )
}

export default LoginForm