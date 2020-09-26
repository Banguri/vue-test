import VeeValidateKo from 'vee-validate/dist/locale/ko';
import { extend ,configure} from 'vee-validate';
import moment from 'moment';
import get from 'lodash/get';
const config = {
  classes: true,
  locale: 'ko',
  validity: true,
  dictionary: {
    ko: VeeValidateKo,
  },
  events: 'input|blur|change|focus',
};
configure(config);
const requiredCheckbox = {
  getMessage(field) {
    return `The ${field} field is required`;
  },
  validate(value) {
    return value || false;
  },
};
const moneyAmount = {
  getMessage(field) {
    return `Value should be more than 0`;
  },
  validate(value) {
    return value > 0;
  },
};
const timeRange = {
  getMessage(field) {
    return `Value of ${field} is invalid`;
  },
  validate(value) {
    const val1 = get(value, '[0]', '') || '';
    const val2 = get(value, '[1]', '') || '';
    if (!val1 || !val2) {
      return false;
    }
    const isValidRange = moment(val1).isBefore(moment(val2));
    if (!isValidRange) {
      return false;
    }
    return true;
  },
};
extend('requiredCheckbox', requiredCheckbox);
extend('moneyAmount', moneyAmount);
extend('timeRange', timeRange);