import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//fontawesome imports
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class FilterClassifieds extends Component {
    render() {
        const { handleChange, tags, newSearchAll } = this.props
        const { name, price, venta, tag } = this.props.paramsFilter

        return (
            <div className='py-3'>
                <div className='d-flex'>
                    <button
                        type='button'
                        className='btn btn-outline-info'
                        data-toggle='modal'
                        data-target='#modalFilters'>
                        Filters
                    </button>

                    <form className='w-100 pl-2'>
                        <div className='input-group'>
                            <input type='text'
                                className='form-control'
                                name='name' id='name'
                                value={name}
                                onChange={handleChange}
                            />
                            <div className='input-group-append'>
                                <Link to={{
                                    pathname: "/listClassifieds/",
                                    search: `name=${name}`,
                                }}>
                                    <button
                                        className='btn btn-outline-info'
                                        onClick={newSearchAll}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <form className='pl-2'>
                        <Link to='/listClassifieds/'>
                            <button className='btn btn-outline-info px-3' onClick={newSearchAll}>
                                All
                            </button>
                        </Link>
                    </form>
                </div>

                <div className='modal fade' id='modalFilters' tabIndex='-1' role='dialog' aria-labelledby='modalFiltersTitle' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>

                            <div className='modal-header'>
                                <h5 className='modal-title' id='modalFiltersTitle'>Filters </h5>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <div className='modal-body'>
                                <form className='pr-4 pl-4'>
                                    <div className='form-group p-0'>
                                        <label htmlFor='name'>What are you searching?</label>
                                        <input type='text'
                                            className='form-control'
                                            name='name'
                                            id='name'
                                            value={name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='form-group p-0'>
                                        <select className='custom-select'
                                            name='tag'
                                            value={tag}
                                            onChange={handleChange}
                                        >
                                            <option value={''}>All tags</option>
                                            {
                                                tags.map(item => {
                                                    if (item) {
                                                        return <option key={item} value={item}>{item}</option>
                                                    } else { return false }
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className='form-group p-0'>
                                        <label htmlFor='price'>Maximum price: </label>
                                        <input
                                            name='price'
                                            type='number'
                                            className='form-control'
                                            value={price}
                                            id='price'
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='form-group p-0'>
                                        <div className='custom-control custom-radio custom-control-inline'>
                                            <input
                                                checked={venta === 'true'}
                                                type='radio'
                                                id='buy'
                                                name='venta'
                                                value='true'
                                                className='custom-control-input'
                                                onChange={handleChange}
                                            />
                                            <label className='custom-control-label' htmlFor='buy'>I want to buy</label>
                                        </div>

                                        <div className='custom-control custom-radio custom-control-inline'>
                                            <input
                                                checked={venta === 'false'}
                                                type='radio'
                                                id='sell'
                                                name='venta'
                                                value='false'
                                                className='custom-control-input'
                                                onChange={handleChange}
                                            />
                                            <label className='custom-control-label' htmlFor='sell'>
                                                I want to sell
                                                        </label>
                                        </div>
                                    </div>

                                    <div className='form-group d-flex justify-content-center  py-3'>
                                        <Link to={{
                                            pathname: "/listClassifieds/",
                                            search: `name=${name}&price=${price}&tags=${tag}&venta=${venta}`,
                                        }}>
                                            <button
                                                className='btn btn-info rounded mx-2'
                                                onClick={newSearchAll}>
                                                Search
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterClassifieds;

FilterClassifieds.propTypes = {
    handleChange: PropTypes.func.isRequired,
    newSearchAll: PropTypes.func.isRequired,
    paramsFilter: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired,
};