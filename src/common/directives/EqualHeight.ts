import { DirectiveOptions } from 'vue';

function removeHeights(selectors: any): void {
  const elements = selectors && document.querySelectorAll(selectors.join(','));
  elements &&
    elements.forEach((element: any) => {
      element.style.removeProperty('height');
    });
}

function getMinHeight(elements: any): number {
  let min: number = 0;
  elements &&
    elements.forEach((element: any) => {
      element.offsetHeight > min && (min = element.offsetHeight);
    });

  return min;
}

function shouldRun(rules: any): boolean {
  let shouldRun = true;
  rules &&
    rules.forEach((rule: any) => {
      let min = 0;
      let max = rule;

      if (typeof rule === 'object') {
        let assign;
        (assign = rule), (min = assign[0]), (max = assign[1]);
      }

      if (window.innerWidth > min && window.innerWidth < max) {
        shouldRun = false;
      }
    });

  return shouldRun;
}

function matchHeights(selectors: any, disabled: any): void {
  if (selectors === void 0) selectors = [];
  if (disabled === void 0) disabled = [];

  removeHeights(selectors);

  if (!shouldRun(disabled)) {
    return;
  }

  selectors &&
    selectors.forEach((selector: any) => {
      const elements = document.querySelectorAll(selector);
      const height = getMinHeight(elements);
      elements &&
        elements.forEach((element: any) => {
          element.style.height = height + 'px';
        });
    });
}

function matchHeightsFunc(binding: any) {
  matchHeights(binding.value.el, binding.value.disabled || []);
}

const directive: DirectiveOptions = {
  inserted: (el: any, binding: any) => {
    setTimeout(() => {
      matchHeightsFunc(binding);
      const elements: any = document.querySelectorAll(binding.value.el);
      elements &&
        elements.forEach((el: any) => {
          const imgs = el.querySelectorAll('img');
          imgs &&
            imgs.forEach((img: any) => {
              img.addEventListener('load', matchHeightsFunc);
            });
        });
    }, 100);
  },
  bind: (el: any, binding: any) => {
    matchHeightsFunc(binding);
    window.addEventListener('resize', () => {
      setTimeout(() => {
        matchHeightsFunc(binding);
      }, 0);
    });
  },
  unbind: () => {
    window.removeEventListener('resize', () => undefined);
  },
};

export default directive;
