import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { urlRouter } from '../../router';
import FilterClassifieds from '../FilterClassifieds'
import CardClassified from '../CardClassified'
import PropTypes from 'prop-types';


function ListClassifieds({ ui, tags, classifieds, getTags, getClassifieds, store, location }) {
    const [newSearch, setNewSearch] = useState(false);
    const [paramsFilter, setParamsFilter] = useState({
        name: '',
        price: '',
        venta: '',
        tag: ''
    });

    useEffect(() => {
        const url = location.search
        const paramsUrl = urlRouter.searchStringToObject(url)
        const objectFilter = _buildObjectFilter(paramsUrl)
        getClassifieds(objectFilter)
        getTags()
        setParamsFilter(objectFilter)
    }, [newSearch])

    const newSearchAll = () => {
        let toggel = !newSearch
        setNewSearch(toggel)
    }

    const handleChange = (e) => {
        const data = paramsFilter
        const element = e.target
        const name = element.name
        const value = element.value
        setParamsFilter({ ...data, [name]: value })
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column pb-3'>
                {console.log(paramsFilter, 'paramsFilter')}
                <FilterClassifieds
                    tags={tags}
                    paramsFilter={paramsFilter}
                    handleChange={handleChange}
                    newSearchAll={newSearchAll}
                />
                <Link to='/newClassified'>
                    <button
                        type='button'
                        className='btn btn-outline-info w-100 '>
                        New classified
                    </button>
                </Link>
            </div>

            {!ui.isFetching ?
                ui.error || store.error ?
                    <div>UPS... somnething is broken </div> :
                    classifieds.length > 0 ?
                        <div className='container-classifieds pt-4'>
                            <div className='row'>
                                {classifieds.map(item => (
                                    <CardClassified
                                        classified={item}
                                        key={item._id} />
                                ))}
                            </div>
                        </div>
                        : <div className='d-flex justify-content-center align-content-center py-5'>
                            <h4 className='text-secondary'>Ups! Its seems that there is no classifieds... try again</h4>
                        </div>
                :
                <div className='d-flex align-items-center justify-content-center p-5'>
                    <div className='spinner-grow text-info p-5' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

const _buildObjectFilter = (search) => {

    let keys = ['name', 'price', 'venta', 'tag'];

    const ObjectKey = keys.reduce((accumulator, key) => {

        if (search.hasOwnProperty(key)) {
            accumulator[key] = search[key]
        } else {
            accumulator[key] = ''
        }
        return accumulator
    }, {})

    return ObjectKey
}

export default ListClassifieds;

ListClassifieds.propTypes = {
    classifieds: PropTypes.array.isRequired,
    store: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    getClassifieds: PropTypes.func.isRequired,
    getTags: PropTypes.func.isRequired,
};