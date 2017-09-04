import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import validateInput from '../../../common/validateInput'
import {Link} from 'react-router-dom';

export default class SigninForm extends React.Component {

    state = {
        username: '',
        password: '',
        loading: false,
        errors: {}
    };

    onSubmit = () => {
        if (this.isValid()) {
            this.setState({errors: {}});
            this.props.signinRequest(this.state)
                .then((response) => {
                    document.cookie = `todotoken=${response.data}`;
                    this.props.history.replace('/');
                })
                .catch(error => {
                    switch (error.response.status) {
                        case 400: {
                            this.setState({errors: {password: error.response.data.message}});
                            break;
                        }
                        case 401: {
                            this.setState({errors: {login: error.response.data.message}});
                            break;
                        }
                        default: this.setState({errors: {}});
                    }
                });
        }
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    render() {

        const {username, password, errors} = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.username}>
                    <label htmlFor="login">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your login"
                        value={username}
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
                        value={password}
                        onChange={this.onChange}
                    />
                    {errors.password && <span style={{color: "#ae5856"}}>{errors.password}</span>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        )
    }
}