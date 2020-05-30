import React, { useState, useEffect, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from '../Form'
import Input from '../Form/Input';
import PropTypes from 'prop-types';
import userStorage from '../../storage'


function Register({ registerUser, logoutUser, user }) {
    const [toLoggin, setToLoggin] = useState(false);

    const renderRedirect = () => {
        return <Redirect to='/login' />
    }

    const checkRegister = async (e, value) => {
        e.preventDefault()
        let userName = value.userName
        let userPassword = value.userPassword

        await registerUser(userName, userPassword)
        userStorage.setUser({ userName, userPassword })

        setToLoggin(true)
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

                            <Form formSubmit={checkRegister} textBtn='Register' initialValues={{ userName: '', userPassword: '' }}>
                                {(handleChange, values) => (
                                    <Fragment>
                                        <Input type='text' name='userName' label='User Name' onChange={handleChange} value={values} />
                                        <Input type='password' name='userPassword' label='User Password' onChange={handleChange} value={values} />
                                    </Fragment>
                                )}
                            </Form>

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