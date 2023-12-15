<template>
  <div class="be-body">
    <ToolsVue :tools="tools"></ToolsVue>
    <PlanVue @drop="onDrop"></PlanVue>
    <div class="be-configuration"></div>
  </div>
</template>
<script setup lang="ts">
import ToolsVue from '@/workspace/tools/index.tsx';
import PlanVue from '@/workspace/plan/index.tsx';
import tools, { createModel } from '@/components/index'

const onDrop = (event: DragEvent) => {
  console.log(event.dataTransfer?.getData('modelType'))
  const model = createModel(event)
}
</script>
<style lang="scss" scoped>
.be {
  &-body {
    height: 800px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  &-tools, &-plan, &-configuration {
    height: 100%;
    overflow: auto;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  &-plan {
    flex: 1;
    min-width: 1px;
  }
  &-configuration {
    flex-shrink: 0;
    width: 220px;
  }
}
</style>
