import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';

export default class SigninForm extends React.Component {

    state = {
        data: {},
        loading: false,
        errors: {}
    };

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    };

    onChange = (event) => {
        this.setState({data: {...this.state.data, [event.target.name]: event.target.value}});
    };

    validate = (data) => {
        const errors = {};

        if (!data.username) errors.username = 'This field is required';
        if (!data.password) errors.password = 'This field is required';

        return errors;
    };

    render() {

        const {data, errors} = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.username}>
                    <label htmlFor="login">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your login"
                        value={data.username}
                        onChange={this.onChange}
                    />
                    {errors.username && <span style={{color: "#ae5856"}}>{errors.username}</span>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="login">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <span style={{color: "#ae5856"}}>{errors.password}</span>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}