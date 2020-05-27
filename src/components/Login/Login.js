import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from '../Form'
import Input from '../Form/Input';
import PropTypes from 'prop-types';
import userStorage from '../../storage'

let dataUser = userStorage.getUser();

function Login({ loginUser, saveUserData, user }) {
    const [initialValues, setInitialValues] = useState({ userName: dataUser.userName, userPassword: dataUser.userPassword });

    const renderRedirect = () => {
        return <Redirect to={`/listClassifieds/?all`} />
    }

    const checkLogin = async (e, value) => {
        e.preventDefault()
        let userName = value.userName
        let userPassword = value.userPassword

        loginUser(userName, userPassword)
            .then(() => userStorage.setUser({ userName, userPassword }))
    }

    useEffect(() => {
        saveUserData(dataUser.userName, dataUser.userPassword)
    }, [])

    return (
        <Fragment>
            {user.login ? renderRedirect() :
                <div className='container-access container pt-4'>
                    {user.errorLogin ?
                        <div className='alert alert-danger' role='alert'>
                            Ups.. {user.errorLogin}
                        </div> : < div className='alert alert-danger invisible ' role='alert'>
                            Ups.. {user.errorLogin}
                        </div>
                    }


                    <div className=' d-flex justify-content-center pt-4'>
                        <div className='d-flex flex-column justify-content-center align-items-center container-form-access'>
                            <h2 className='text-center'>Login</h2>

                            <Form formSubmit={checkLogin} textBtn='Login' initialValues={initialValues}>
                                {(handleChange, values) => (

                                    <Fragment>
                                        {console.log(initialValues, user, 'dataLogin')}
                                        <Input type='text' name='userName' label='User Name' onChange={handleChange} value={values} />
                                        <Input type='password' name='userPassword' label='User Password' onChange={handleChange} value={values} />
                                    </Fragment>
                                )}
                            </Form>

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





