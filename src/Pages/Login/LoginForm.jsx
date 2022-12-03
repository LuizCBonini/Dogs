import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Form/Button/Button'
import Input from '../../Components/Form/Input/Input'

// Hooks
import useForm from '../../Hooks/useForm'

// Context
import { UserContext } from '../../UserContext'

const LoginForm = () => {

  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)        
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type='text' name='username' {...username}/>
        <Input label="Senha" type='password' name='password' {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to='/login/criar'>Cadastrar</Link>
    </div>
  )
}

export default LoginForm