<script>
import _ from 'lodash';
// type Record<K extends string, T> = { [P in K]: T };
import { Component, Vue, Prop } from 'vue-property-decorator';

function isAvailable(value) {
  return !(value === null || value === undefined);
}

// interface IElementOptions {
//   attrs: any;
//   style: any;
//   props: any;
// }
//
// interface IElementOptionsArgSet {
//   isRoot?: boolean;
//   area?: string;
//   zIndex?: number;
//   defaultHeight?: number | null;
//   defaultWidth?: number | null;
// }

export default {
  props: {
    instance: {
      type: Object,
    }  ,
    options: {
      type: Object,
      default: '# your markdown content',
    }
  },

  methods: {
    makeElementOptions(
      instance,
      {
        isRoot,
        area,
        zIndex,
        defaultHeight = null,
        defaultWidth = null,
      }
    ) {
      let props = _.pickBy(instance.props, isAvailable);
      if (
        this.$store.state.page.editorFlashDataStore &&
        this.$store.state.page.editorFlashDataStore.instanceProps &&
        this.$store.state.page.editorFlashDataStore.instanceProps[
        '#' + instance.renderId
          ]
      ) {
        props = {
          ..._.pickBy(instance.props, isAvailable),
          ..._.pickBy(
            this.$store.state.page.editorFlashDataStore.instanceProps[
            '#' + instance.renderId
              ],
            isAvailable
          ),
        };
      }

      let layout = _.pickBy(instance.layout, isAvailable);

      if (
        this.$store.state.page.editorFlashDataStore &&
        this.$store.state.page.editorFlashDataStore.instanceLayout &&
        this.$store.state.page.editorFlashDataStore.instanceLayout[
        '#' + instance.renderId
          ]
      ) {
        layout = {
          ..._.pickBy(instance.layout, isAvailable),
          ..._.pickBy(
            this.$store.state.page.editorFlashDataStore.instanceLayout[
            '#' + instance.renderId
              ],
            isAvailable
          ),
        };
      }

      const elementOpts = {
        attrs: {
          'data-system-nid': instance.renderId,
          'data-system-component': instance.component.refId,
        },

        style: {
          minWidth: defaultWidth,
        },

        props: {
          instanceId: instance.renderId,
          isRoot,
          ...props,
        },
      };

      if (defaultHeight) {
        elementOpts.style.minHeight = defaultHeight;
      }

      if (area) {
        elementOpts.attrs['data-system-area'] = area;
      }

      if (props.dataId) {
        elementOpts.attrs['data-system-data'] = props.dataId.refId
          ? props.dataId.refId
          : props.dataId;
      }

      if (
        instance.commonInstanceIndex &&
        instance.commonInstanceIndex.length > 0
      ) {
        elementOpts.attrs['data-system-commonid'] =
          instance.commonInstanceIndex[0].commonInstanceIndexId;
        elementOpts.attrs['data-system-commontype'] =
          instance.commonInstanceIndex[0].commonType.value;
      }

      if (layout.height) {
        elementOpts.style.height = layout.height;
      }

      if (layout.width) {
        elementOpts.style.width = layout.width;
      }

      if (layout.minHeight) {
        elementOpts.style.minHeight = layout.minHeight;
      }

      if (layout.minWidth) {
        elementOpts.style.minWidth = layout.minWidth;
      }

      if (layout.left) {
        elementOpts.style.left = layout.left;
      }

      if (layout.top) {
        elementOpts.style.top = layout.top;
      }

      if (layout.position) {
        elementOpts.style.position = layout.position.value;
      }

      if (layout.margin) {
        elementOpts.style.margin = layout.margin;
      }

      if (layout.bg) {
        if (layout.bg.cssColor) {
          elementOpts.style.backgroundColor = layout.bg.cssColor;
        }

        if (layout.bg.image) {
          elementOpts.style.backgroundImage = `url(${this.$cmsSrc(
            layout.bg.image.fileValue
          )})`;
          elementOpts.attrs.alt = layout.bg.image.name;
        }

        if (layout.bg.imageSizing) {
          elementOpts.style.backgroundSize = layout.bg.imageSizing.value;
        }
      }

      if (zIndex || layout.zIndex) {
        elementOpts.style.zIndex = zIndex || layout.zIndex;
      }

      if (layout.displayMethod) {
        elementOpts.style.display = layout.displayMethod.value;
      }
      if (layout.textAlign) {
        elementOpts.style.textAlign = layout.textAlign.value;
      }
      if (layout.verticalAlign) {
        elementOpts.style.verticalAlign = layout.verticalAlign.value;
      }

      return elementOpts;
    },

    renderRecursively(
      createElement,
      target,
      options = {}
    ) {
      let theme;

      if (this.$store.state.site.theme) {
        theme = this.$store.state.site.theme.value;
      } else {
        console.error('사이트에 테마가 지정되지 않았습니다.');
      }

      let componentName;
      const originName = target.component.value;
      const altComponentName = originName.replace(/^@theme/, 'theme');

      if (target.component) {
        componentName = originName;
      } else {
        console.error('인스턴스에 컴포넌트가 지정되지 않았습니다.');
      }

      if (componentName.indexOf('@theme') === 0) {
        if (theme === 'default') {
          componentName = originName.replace(/^@theme/, 'theme');
        } else {
          componentName = originName.replace(/^@theme/, `theme-${theme}`);
        }
      }

      if (Array.isArray(target.instances)) {
        /**
         * Container Rendering
         */
        let element = createElement(
          componentName,
          this.makeElementOptions(target, options),
          (target.instances || [])
            .filter(i => i)
            .map(instanceRet =>
              this.renderRecursively(createElement, instanceRet)
            )
        );

        if (element.tag === componentName) {
          /**
           *  공통 컴포넌트 매핑 시도
           */
          element = null;
          element = createElement(
            altComponentName,
            this.makeElementOptions(target, options),
            (target.instances || [])
              .filter(i => i)
              .map(instanceRet =>
                this.renderRecursively(createElement, instanceRet)
              )
          );

          if (element.tag === altComponentName) {
            /**
             * 에러 표시 컴포넌트 매핑
             */

            element = null;
            element = createElement(
              'div',
              {
                ...this.makeElementOptions(target, options),
                class: {
                  'not-defined': true,
                },
              },
              [`Component[${componentName}] not defined`]
            );
          }
        }

        return element;
      } else if (target.component) {
        /**
         * Component Rendering
         */
        let element = createElement(
          componentName,
          this.makeElementOptions(target, options),
          []
        );

        if (element.tag === componentName) {
          /**
           *  공통 컴포넌트 매핑 시도
           **/
          element = null;
          element = createElement(
            altComponentName,
            this.makeElementOptions(target, options),
            []
          );

          if (element.tag === altComponentName) {
            /**
             * 에러 표시 컴포넌트 매핑
             */

            element = null;
            element = createElement(
              'div',
              {
                ...this.makeElementOptions(target, options),
                class: {
                  'not-defined': true,
                },
              },
              [`Component[${componentName}] not defined`]
            );
          }
        }

        return element;
      }

      return createElement('div', {}, ['Instance is null']);
    }
  },
  render(ce) {
    return this.renderRecursively(ce, this.instance, this.options);
  }
}
</script>

<style scoped>
.not-defined {
  /*width: 100%;*/
  color: #fff;
  text-align: center;
  background-color: #d23939;
  padding: 10px;
}
</style>
