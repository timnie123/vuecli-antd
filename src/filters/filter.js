import Vue from 'vue';
import moment from 'moment';

Vue.filter('timeTransform', (time, format) => {
  if (!time) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return moment(time).format(format);
});
