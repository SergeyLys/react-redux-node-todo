import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Main from './Main';
import {currentUserRequest} from '../../actions/authActions';
import checkToken from '../../common/checkToken';

class MainContainer extends React.Component {
    componentDidMount() {
        if (checkToken('token'))
            this.props.currentUserRequest(checkToken('token'));

    }

    render() {
        return (
            <Main currentUser={this.props.currentUser.user}/>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user
});

export default withRouter(connect(mapStateToProps, {currentUserRequest})(MainContainer));