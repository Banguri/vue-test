import Vue from 'vue';

Vue.filter('currency', (value : string) => {
  if (!value) {
    return '';
  }

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
