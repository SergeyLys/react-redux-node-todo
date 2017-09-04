import React from 'react';
import SigninForm from './SigninForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import checkToken from '../../../common/checkToken';
import { signinRequest, currentUserRequest } from '../../../actions/authActions';

class SigninContainer extends React.Component {

    componentWillUnmount() {
        if (checkToken('todotoken') != '')
            this.props.currentUserRequest(checkToken('todotoken'));
    }

    render() {
        return (
            <div className="authorization-wrapper">
                <h1>Please login or <Link to='/signup'>register</Link></h1>
                <SigninForm history={this.props.history} signinRequest={this.props.signinRequest}/>
            </div>
        )
    }
}

export default connect(null, {
    signinRequest,
    currentUserRequest
})(SigninContainer);