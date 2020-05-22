import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import userStorage from '../../storage'


function Login({ loginUser, user }) {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const renderRedirect = () => {
        return <Redirect to={`/listClassifieds/?all`} />
    }

    const checkLogin = async (e) => {
        e.preventDefault()
        loginUser(userName, userPassword)
    }

    useEffect(() => {
        const dataUser = userStorage.getUser();
        setUserName(dataUser.userName);
        setUserPassword(dataUser.userPassword)
        //falta guardarlo en redux
    }, [])

    return (
        <Fragment>
            {user.login ? renderRedirect() :
                <div className='container-access container pt-4'>
                    {user.error ?
                        <div className='alert alert-danger' role='alert'>
                            Ups.. {user.error}
                        </div> : < div className='alert alert-danger invisible ' role='alert'>
                            Ups.. {user.error}
                        </div>
                    }

                    <div className=' d-flex justify-content-center pt-4'>
                        <div className='d-flex flex-column justify-content-center align-items-center container-form-access'>
                            <h2 className='text-center'>Login</h2>
                            <form
                                className='pt-5 w-100'
                                onSubmit={checkLogin}>
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
                                        Login
                                   </button>
                                </div>
                            </form>

                            <Link to='/register'>
                                <p className='text-decoration-none text-info'>
                                    Haven´t any account?
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}



export default Login





