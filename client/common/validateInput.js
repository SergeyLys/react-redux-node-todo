import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.title)) {
        errors.title = 'This is required field'
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = 'This is required field'
    }

    // if (Validator.isEmpty(data.location)) {
    //     errors.location = 'Это поле необходимо заполнить'
    // }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}