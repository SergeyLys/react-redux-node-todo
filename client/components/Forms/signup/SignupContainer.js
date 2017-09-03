import React from 'react';
import {connect} from 'react-redux';
import {signupRequest} from '../../../actions/authActions';
import SignupForm from './SignupForm';

class SignupContainer extends React.Component {
    render() {
        return (
            <SignupForm signupRequest={this.props.signupRequest} />
        )
    }
}

export default connect(null, {signupRequest})(SignupContainer);