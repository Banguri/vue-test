import Vue from 'vue';

export function registerCollection ( collection ) {
  /**
   * Common
   */
  const componentKeys = Object.keys( collection );
  // component collection 의 모든 컴포넌트를 등록한다.
  for ( let i = 0; i < componentKeys.length; i++ ) {
    console.log('registered', componentKeys[i]);
    Vue.component( componentKeys[i], collection[componentKeys[i]] );
  }
}

import BasisCollection from '../components/basicComponents/basis.collection';
registerCollection( BasisCollection );
