
import { ref } from 'vue';

export function useVModel<T>(initial: T) {
  const state = ref(initial);
  const onUpdateModelValue = (value: T) => {
    // @ts-ignore
    state.value = value
  }
  return [state, onUpdateModelValue]
}