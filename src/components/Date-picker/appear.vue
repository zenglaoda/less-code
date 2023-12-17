<template>
  <el-date-picker
    type="date"
    @update:model-value="onChange"
    :modelValue="value"
    :placeholder="configuration.placeholder"
    :format="configuration!.format"
    :value-format="configuration!.valueFormat"
    :readonly="readonly"
  />
</template>
<script setup lang="ts">
import { useAppear } from '../utils/common.ts';

import type {PropType} from 'vue'
import type { DatePicker } from '../types';

const props = defineProps({
  form: {
    type: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
  entity: {
    type: Object as PropType<DatePicker>,
    required: true
  }
})
const { value, onUpdateModelValue, configuration} = useAppear(props);

const onChange = (date: string) => {
  onUpdateModelValue(date)
}
</script>
<style lang="scss" scoped>
.be {

}
</style>