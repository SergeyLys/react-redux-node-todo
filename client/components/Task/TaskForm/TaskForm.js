import React from 'react';
import classnames from 'classnames';
import checkToken from '../../../common/checkToken';
import validateInput from '../../../common/validateInput';
import {Form, Button} from 'semantic-ui-react';

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
            this.props.createTaskRequest(this.state, checkToken('todotoken')).then(()=> {
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
                <Form onSubmit={::this.onSubmit}>

                    <Form.Field error={!!errors.title}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={::this.onChange}
                        />
                        {errors.title && <span style={{color: "#ae5856"}}>{errors.title}</span>}
                    </Form.Field>

                    <Form.Field error={!!errors.body}>
                        <label>Description</label>
                        <textarea
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={::this.onChange}
                        />
                        {errors.body && <span style={{color: "#ae5856"}}>{errors.body}</span>}
                    </Form.Field>

                    <div className="input-row">
                        <Button primary className="button">Add task</Button>
                    </div>
                </Form>
            </div>
        )
    }
}