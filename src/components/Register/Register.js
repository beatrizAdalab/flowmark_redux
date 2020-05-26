import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import userStorage from '../../storage'


function Register({ registerUser, logoutUser, user }) {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [toLoggin, setToLoggin] = useState(false);

    const renderRedirect = () => {
        return <Redirect to='/login' />
    }

    const checkRegister = async (e) => {
        e.preventDefault()
        setToLoggin(true)
        await registerUser(userName, userPassword)
        userStorage.setUser({ userName, userPassword })
    }

    useEffect(() => {
        logoutUser()
    }, [])

    return (
        <Fragment>
            {toLoggin && user.register ? renderRedirect() :
                <div className='container container-access pt-4'>
                    {user.errorRegister ?
                        <div className='alert alert-danger ' role='alert'>
                            Ups.. {user.errorRegister}
                        </div> : < div className='alert alert-danger invisible ' role='alert'>
                            Ups.. {user.errorRegister}
                        </div>
                    }

                    < div className=' d-flex justify-content-center pt-4' >
                        <div className='d-flex flex-column justify-content-center align-items-center container-form-access'>
                            <h2 className='text-center'>Welcome to FlowMark</h2>
                            <form
                                className='pt-5 w-100'
                                onSubmit={checkRegister}
                            >
                                <div className='form-group'>
                                    <label htmlFor='userName'>User Name <small className='text-muted'> * </small> </label>
                                    <input
                                        className='form-control'
                                        required
                                        type='text'
                                        id='userName'
                                        name='userName'
                                        value={userName}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='userPassword'>User Password <small className='text-muted'> * </small> </label>
                                    <input
                                        className='form-control'
                                        required
                                        type='password'
                                        id='userPassword'
                                        name='userPassword'
                                        value={userPassword}
                                        onChange={e => setUserPassword(e.target.value)}
                                    />
                                </div>

                                <div className='form-group d-flex justify-content-center pt-2'>
                                    <button
                                        className='btn btn-info rounded'
                                        type='submit'>
                                        Register
                                        </button>
                                </div>
                            </form>
                            <Link to='/login'>
                                <p className='text-decoration-none text-info'>Have an account? </p>
                            </Link>
                        </div>
                    </div >
                </div >
            }
        </Fragment>
    )
}

Register.propTypes = {
    user: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}

export default Register