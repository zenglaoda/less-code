<template>
  <div>
    <el-form :model="configuration" label-position="top">
      <el-form-item label="字段名" required>
        <el-input
          v-model="configuration!.field"
        />
      </el-form-item>
      <el-form-item label="标签文本">
        <el-input
          v-model="configuration!.label"
        />
      </el-form-item>
      <el-form-item label="输入提示语">
        <el-input
          v-model="configuration!.placeholder"
        />
      </el-form-item>
      <el-form-item label="显示格式">
        <el-select v-model="configuration!.format" placeholder="请选择日期格式">
          <el-option value="YYYY/MM/DD">XXXX/XX/XX</el-option>
          <el-option value="YYYY-MM-DD">XXXX-XX-XX</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据格式">
        <el-select v-model="configuration!.valueFormat" placeholder="请选择日期格式">
          <el-option value="YYYY/MM/DD">XXXX/XX/XX</el-option>
          <el-option value="YYYY-MM-DD">XXXX-XX-XX</el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type {PropType} from 'vue'
import type { DatePicker } from '../types';

const props = defineProps({
  entity: {
    type: Object as PropType<DatePicker>,
    required: true
  }
})
const configuration = ref<DatePicker["configuration"]>()
watch(
  () => props.entity,
  () => {
    configuration.value = props.entity.configuration
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
</style>
