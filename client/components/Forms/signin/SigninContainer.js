import React from 'react';
import SigninForm from './SigninForm';

export default class SigninContainer extends React.Component {

    submit = (data) => {
        console.log(data);
    };

    render() {
        return (
            <SigninForm submit={this.submit}/>
        )
    }
}