import React from 'react'

import Input from '../../Components/Form/Input/Input'
import Button from '../../Components/Form/Button/Button'

import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../../Components/Helper/Error'
import Head from '../../Components/Helper/Head'

const LoginPasswordLost = () => {

  const login = useForm();
  const {data, loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    if(login.validate()) {
      const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar'),})
      const {json} = await request(url, options)
      console.log(json)
    }
  }

  return (
    <section>
      <Head title='Perdeu a Senha?'/>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? <p style={{color: 'green'}}>{data}</p>
      :
        <form onSubmit={handleSubmit}>
          <Input
            label="Email / Usuário"
            type="text"
            name="login"
            {...login}
          />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar email</Button>}
          <Error error={error}/>
        </form>
      }

    </section>
  )
}

export default LoginPasswordLost