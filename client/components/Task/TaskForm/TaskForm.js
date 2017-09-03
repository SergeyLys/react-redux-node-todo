import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../common/validateInput';

export default class TaskForm extends React.Component {
    constructor() {
        super()
    }

    state = {
        title: '',
        body: '',
        errors: {}
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}});
            this.props.createTaskRequest(this.state).then(()=> {
                this.setState({
                    title: '',
                    body: ''
                });
            });
        }

    }

    render() {
        const errors = this.state.errors;
        return(
            <div className="form-wrapper">
                <form onSubmit={::this.onSubmit}>

                <div className={classnames("input-row", {'has-error': errors.title})}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={::this.onChange}
                        />
                        {errors.title ? <span className="error">{errors.title}</span> : ''}
                    </div>

                    <div className={classnames("input-row", {'has-error': errors.body})}>
                        <label>Description</label>
                        <textarea
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={::this.onChange}
                        />
                        {errors.body ? <span className="error">{errors.body}</span> : ''}
                    </div>

                    <div className="input-row">
                        <button className="button">Add task</button>
                    </div>
                </form>
            </div>
        )
    }
}