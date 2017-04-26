import _ from 'lodash';

export function hello(event, context, callback) {
    console.log(_.snakeCase('My furst lambda function'));

    callback(null, _.snakeCase('fuck yeah'));
}
