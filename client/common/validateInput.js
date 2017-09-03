import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (typeof data.title != 'undefined' && Validator.isEmpty(data.title)) {
        errors.title = 'This is required field'
    }

    if (typeof data.body != 'undefined' && Validator.isEmpty(data.body)) {
        errors.body = 'This is required field'
    }

    if (typeof data.password != 'undefined' && Validator.isEmpty(data.password)) {
        errors.password = 'This is required field'
    }
    
    if (typeof data.username != 'undefined' && Validator.isEmpty(data.username)) {
        errors.username = 'This is required field'
    }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}