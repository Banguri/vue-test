/**
 * $$getTheme
 * @description Will return theme value
 * @returns {string|*}
 */
export function $$getTheme() {
  if( this.$store.state.site.overrideThemeValue ){
    return this.$store.state.site.overrideThemeValue;
  } else {
    if (this.$store.state.site.theme) {
      return this.$store.state.site.theme.value;
    }
  }

  if( this.$$config.defaultTheme ){
    return this.$$config.defaultTheme;
  }
  return 'default';
};

/**
 * $$switchThemeComponent
 * @description branching Component by theme and condition
 * @param conditionPair:Array = ( condition, component, condition, component, ..., condition, component, {component}? )
 *  - condition : string or boolean
 * @returns {*}
 */
export function $$switchThemeComponent(conditionPair) {
  const length = conditionPair.length;

  // If passed one element from conditionPair Array elements.
  // Will suppose to be a component and then return that one instantly.
  if (length === 1) {
    return conditionPair[0];
  }

  const theme = this.$$getTheme();
  let condition, component;
  for (let i = 0; i < length; i = i + 2) {
    condition = conditionPair[i * 2];
    component = conditionPair[i * 2 + 1];

    if (typeof condition === 'string') {
      if (theme === condition) {
        return component;
      }
    } else if (typeof condition === 'boolean') {
      if (condition) {
        return component;
      }
    }

  }

  /**
   * If Those didn't match even one with conditionPair and conditionPair has odd number elements,
   * Suppose to be the last element is component and then Will return that one as Default Component.
   */
  if (conditionPair[length - 1]) {
    return conditionPair[length - 1];
  }


  throw new Error('$$switchThemeComponent Error: didn\'t match anyone.');
}


export function MasqueradeRenderReplace(ce){
  return ce(this.kernel(), {
    props: this.$props,
    scopedSlots: this.$scopedSlots,
    slots: this.$slots,
    on: this.$listeners,
    once: this.$once,
  });
}
