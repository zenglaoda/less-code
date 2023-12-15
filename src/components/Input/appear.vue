<template>
  <div>
    <el-input
      :placeholder="configuration.placeholder"
      :maxlength="configuration.maxlength"
    />
  </div>
</template>
<script setup lang="ts">
import { toRef } from 'vue'
import type {PropType} from 'vue'
import type { InputEntity } from '../types';

const props = defineProps({
  entity: {
    type: Object as PropType<InputEntity>,
    required: true
  }
})
const configuration = toRef(props.entity, 'configuration')
</script>
<style lang="scss" scoped></style>
