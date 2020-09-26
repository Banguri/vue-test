import { Vue } from 'vue-property-decorator';

const bindings = ['$fetch', '$get', '$getProjectHref', '$$fetch', '$toast'];

export default class BaseRepository {

  // this.$store =  this;
  // this.$router =  this;

  constructor({ $store, $router }) {
    this.$store = $store;
    this.$router = $router;

    // TODO: this will run every time we initialize
    bindings.forEach(k => {
      if (Vue.prototype[k] && typeof Vue.prototype[k] === 'function') {
        BaseRepository.prototype[k] = Vue.prototype[k].bind(this);
      } else {
        BaseRepository.prototype[k] = Vue.prototype[k];
      }
    });
  }

  /**
   * Check $fetch response's result whether it has success code e.g. 200
   * @param response
   */
  checkRequestSucceeded(response, codes){
    const resultCode = this.$get(response, 'data.result', '');
    return codes.indexOf(resultCode) !== -1;
  }

  /**
   * Remove Item from array of objects by specific field
   * @param array
   * @param field
   * @param value
   * @param onlyOnce
   */
  removeItemFromArray(
    array,
    field,
    value,
    onlyOnce
  ) {
    onlyOnce = true;
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item[field] === value) {
        array.splice(i, 1);
        if (onlyOnce) return;
      }
    }
  }
}
