import LoadingComponent from '../components/asyncComponentLoading.vue';
import ErrorComponent from '../components/asyncComponentError.vue';

export function registerComponent(
  importFunc,
  loadingComponent = LoadingComponent,
  errorComponent = ErrorComponent
) {
  return () => ({
    // The component to load (should be a Promise)

    component: importFunc(),
    // A component to use while the async component is loading
    loading: loadingComponent,
    // A component to use if the load fails
    error: errorComponent,
    // Delay before showing the loading component. Default: 200ms.
    delay: 200,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000,
  });
}

export function componentId(name) {
  return `reg-${name}`
}

