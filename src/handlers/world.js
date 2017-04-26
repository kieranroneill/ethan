import _ from 'lodash';

export default function world(event, context, callback) {
    console.log(_.kebabCase('My second lambda function'));

    callback(null, _.kebabCase('fuck no'));
}
