import moment from 'moment';
import Vue from 'vue';

Vue.filter('date', (value:any) => {
  if (!value) {
    return '';
  }
  return moment(value).format('YYYY.MM.DD');
});

Vue.filter('datetime', (value:any) => {
  if (!value) {
    return '';
  }
  return moment(value).format('YYYY.MM.DD HH:mm');
});
