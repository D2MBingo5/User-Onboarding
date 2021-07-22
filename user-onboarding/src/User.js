import React from 'react'

function User({ details }) {
    if (!details) {
        return <h3>Fetching users...</h3>
    }

    return (
        <div className='user-container'>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.pw}</p>
        </div>
    )
}

export default User