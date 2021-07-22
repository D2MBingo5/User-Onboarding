import React from 'react'

export default function Form (props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='class-container' onSubmit={onSubmit}>
            <div className='valid-errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.pw}</div>
                <div>{errors.tos}</div>
            </div>

            <label>Name
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                />
            </label>

            <label>Email
                <input 
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                />
            </label>

            <label>Password
                <input 
                    type='text'
                    name='pw'
                    value={values.pw}
                    onChange={onChange}
                />
            </label>

            <label>Terms of Service
                <input 
                    type='checkbox'
                    name='tos'
                    checked={values.tos}
                    onChange={onChange}
                />
            </label>

            <div className='button-house'>
                <button id='submitBtn' disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}