import React, { useEffect, } from 'react';
import ReactImageFallback from 'react-image-fallback';
import nophoto from '../../assets/images/nophoto.png';
import PropTypes from 'prop-types';


function DetailClassified({ cl, getClassified, match }) {

    useEffect(() => {
        const { id } = match.params
        getClassified(id)
    }, [])

    const { tags, name, price, description, photo, updatedAt } = cl
    return (
        <div className='container container-detail d-flex justify-content-center align-items-center'>
            <div className='card shadow-sm detail-card w-100'>
                <div className='row no-gutters'>
                    <div className='col-12 col-lg-5'>
                        <ReactImageFallback
                            src={photo}
                            fallbackImage={nophoto}
                            className='card-img detail-img border-right'
                            alt={name}
                        />
                    </div>
                    <div className='col-12 col-lg-7'>
                        <div className='card-body d-flex flex-column justify-content-between h-100'>
                            <div>
                                <h2 className='card-title'>{name}</h2>
                                <h4>{price} € </h4>
                                <div>
                                    {tags ?
                                        tags.map((tag, index) => <span key={index} className='badge badge-pill mr-2 mb-2 badge-secondary'> {tag} </span>)
                                        : false}
                                </div>
                            </div>
                            <p className='card-text h-100 '>
                                {description}
                            </p>
                            <div className='card-footer bg-transparent p-0'>
                                <small className='text-muted'>Last updated {updatedAt} </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DetailClassified;

DetailClassified.propTypes = {
    cl: PropTypes.object.isRequired,
    getClassified: PropTypes.func.isRequired,
    getTags: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    ui: PropTypes.object.isRequired,
};


