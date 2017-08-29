import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Main from './Main';

class MainContainer extends React.Component {
    render() {
        return (
            <Main/>
        )
    }
}

export default withRouter(connect(null, null)(MainContainer));