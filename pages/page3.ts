import moment from 'moment'

var date = new Date('2015-02-27T10:00:00');
var formatted = moment(date).format('D MMMM YYYY');

console.log(formatted);

