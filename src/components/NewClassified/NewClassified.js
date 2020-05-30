import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FormClassified from '../FormClassified'
import PropTypes from 'prop-types';


class NewClassified extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classified: {
                name: '',
                price: 0,
                description: '',
                tags: [],
                type: '',
                photo: '',
            },
            tagsStore: [],
            status: {
                success: '',
                error: false
            }
        }
    }

    componentDidMount() {
        this.getTags()
    };

    getTags = () => {
        this.props.getTags()
            .then(() => {
                this.setState({
                    tags: this.props.tags
                })
            });
    };

    handleChange = (e) => {
        const element = e.target
        const data = this.state.classified
        const name = element.name
        const value = element.value

        if (name === 'tags') {
            const tags = this.state.classified.tags

            if (!tags.includes(value)) {
                this.setState({
                    classified: { ...data, [name]: [...tags, value] }
                })
            } else {

                this.setState({
                    classified: { ...data, [name]: tags.filter(item => item !== value) }
                })
            }

        } else {
            this.setState({
                classified: { ...data, [name]: value }
            })
        }
    }

    clickForm = (e) => {
        const classified = this.state.classified
        e.preventDefault();
        this.props.newClassified(classified)
            .then(() => this.setState({
                status: {
                    success: !this.props.ui.error
                }
            }))
    };

    renderRedirect = () => {
        const redirect = this.state.status.success
        if (redirect) {
            return <Redirect to={`/listClassifieds/?name=${this.state.classified.name}`} />
        }
    };

    render() {
        const { error } = this.props.ui
        return (
            <div className='container p-5'>

                {this.renderRedirect()}

                {error ?
                    <div className='alert alert-danger' role='alert'>
                        Ups.. {error}
                    </div> : < div className='alert alert-danger invisible ' role='alert'>
                        Ups.. {error}
                    </div>
                }


                <h2>New Classifieds</h2>
                <FormClassified
                    store={this.state.tagsStore}
                    paramsClassified={this.state.classified}
                    handleChange={this.handleChange}
                    clickForm={this.clickForm}
                    textButton={'New'}
                />
            </div>
        )
    }
}

export default NewClassified;

NewClassified.propTypes = {
    cl: PropTypes.object.isRequired,
    newClassified: PropTypes.func.isRequired,
    getClassified: PropTypes.func.isRequired,
    getTags: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    ui: PropTypes.object.isRequired,
};