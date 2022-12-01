import { useState } from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        message: 'Preencha um e-mail válido',
    }
}

const useForm = (type) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {
        if(type === false) return true
        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        setError(null)
        setValue(target.value)
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm;