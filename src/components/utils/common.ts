import {computed, toRef } from 'vue';

export function useAppear(props: any) {
  const configuration = toRef(props.entity, 'configuration')
  const value = computed(() => {
    if (props.form && configuration.value.field) {
      return props.form[configuration.value.field]
    }
    return '';
  })
  
  const onUpdateModelValue = (value: string) => {
    if (props.form && configuration.value.field) {
      props.form[configuration.value.field] = value;
    }
  }
  return {
    value,
    configuration,
    onUpdateModelValue
  }
}
