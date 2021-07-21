import logo from './logo.svg';
import './App.css';

import Form from './Form'
import schema from './formSchema'
import User from './User'

import axios from 'axios'
import { reach } from 'yup'
import React, { useState, useEffect } from 'react';

// initial states
const initialFormValues = {
  name: '',
  email: '',
  pw: '',
  tos: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  pw: '',
  tos: false,
}
const initialUsers = []
const initialDisabled = true

function App() {
  // states
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {console.log(err)})
      .finally(() => {setFormValues(initialFormValues)})
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      pw: formValues.pw.trim(),
      tos: formValues.tos
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>User Onboarding Form</h1></header>

      <Form 
        values={formValues}
        submit={formSubmit}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

    </div>
  );
}

export default App;
