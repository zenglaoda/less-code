<template>
  <el-input
    @update:model-value="onUpdateModelValue"
    :model-value="value"
    :placeholder="configuration.placeholder"
    :maxlength="configuration.maxlength"
    :readonly="readonly"
    :clearable="configuration.clearable"
  />
</template>
<script setup lang="ts">
import { useAppear } from '../utils/common.ts';

import type {PropType} from 'vue';
import type { InputEntity } from '../types';

const props = defineProps({
  readonly: {
    type: Boolean,
    default: false
  },
  form: {
    type: null
  },
  entity: {
    type: Object as PropType<InputEntity>,
    required: true
  }
})
const { value, onUpdateModelValue, configuration} = useAppear(props);
</script>
<style lang="scss" scoped></style>
