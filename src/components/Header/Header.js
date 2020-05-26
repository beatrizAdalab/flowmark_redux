import React from 'react';
import { Link } from 'react-router-dom';

// fontawesome imports
import { faPowerOff, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ user, logoutUser }) {
    return (
        <nav className='navbar navbar-light bg-white fixed-top'>
            <div className='container'>
                <h1 className='navbar-brand m-0 ml-2 '> <span className='text-info'>F</span>lowMark</h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <p className="m-0 pr-2 text-info">{user.userName}</p>
                    <Link className='text-decoration-none' to='/listClassifieds/'>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='text-info' icon={faHome} />
                        </div>
                    </Link>

                    <button
                        className='btn btn-link'
                        onClick={logoutUser}>
                        <FontAwesomeIcon className='text-info' icon={faPowerOff} />
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Header;