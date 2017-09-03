import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
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
            this.props.signupRequest(this.state)
                .then((response)=> {
                    // this.setState({data});
                    console.log(response);
                
                })
                .catch(error => {
                    switch (error.response.status) {
                        case 400: {
                            this.setState({errors: {}});
                            this.setState({errors: {username: 'This username already exist'}});
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
                <Button primary>Signup</Button>
                <Link to='/signin'>Login</Link>
            </Form>
        )
    }
}