import { DirectiveOptions } from 'vue';
import { get, set } from 'lodash';
//
const directive: DirectiveOptions = {
  inserted: (el: any, binding: any, vnode: any) => {
    const uagent = navigator.userAgent;
    const isIE =
      uagent.indexOf('MSIE ') > -1 || uagent.indexOf('Trident/') > -1;
    const event: string = isIE ? 'textinput' : 'input';
    let regex: any = '';
    switch (binding.value) {
      case 'number':
        regex = /[0-9$&+,:;=?!`@#|{}'<>.^*()%~-]/g;
        break;
      case 'korean':
        regex = /[^a-zA-Z0-9$&+,:;=?@#|'<>.^*()%!-]/g;
        break;
      case 'character':
        regex = /[^0-9]/g;
        break;
    }

    el.addEventListener(event, (e: KeyboardEvent) => {
      if( e && e.target  ){
        const target: HTMLInputElement = e.target as HTMLInputElement;

        if( target.value ){
          target.value = target.value.replace(regex, '');
          const vModel = get(vnode, 'data.model.expression', '');
          set(vnode.context, vModel, target.value);
        }
      }


    });
  },
};

export default directive;
