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
      <el-form-item label="字符最大长度">
        <el-input
          v-model="configuration!.maxlength"
        />
      </el-form-item>
      <el-form-item label="是否可以清空">
        <el-switch
          v-model="configuration!.clearable"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type {PropType} from 'vue'
import type { InputEntity } from '../types';

const props = defineProps({
  entity: {
    type: Object as PropType<InputEntity>,
    required: true
  }
})
const configuration = ref<InputEntity["configuration"]>()
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
