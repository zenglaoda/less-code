<template>
  <div>
    <el-form :model="configuration">
      <el-form-item label="提示语">
        <el-input
          v-model="configuration.placeholder"
        />
      </el-form-item>
      <el-form-item label="字符最大长度">
        <el-input
          v-model="configuration.maxlength"
        />
      </el-form-item>
    </el-form>
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
<style lang="scss" scoped>
</style>
