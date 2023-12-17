<template>
  <div class="be-body">
    <ThumbsVue
      @dragstart="onDragStart"
    />
    <PlanVue
      @drop="onDrop"
      :entities="entities"
      :activated="currentEntity"
      :formCfg="formCfg"
      @click-entity="onClickEntity"
      @remove="onRemove"
    />
    <ConfigurationVue 
      v-if="currentEntity"
      :entity="currentEntity"
      :formCfg="formCfg"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import ThumbsVue from '@/workspace/thumb/index';
import PlanVue from '@/workspace/plan/index';
import ConfigurationVue from '@/workspace/configuration/index';
import { createEntity } from '@/components/index'
import { formElements } from './entities';

import type { Model, Entity } from '@/components/index'


const formCfg = reactive({
  labelPosition: 'top',
  labelWidth: 120,
})
const entities = ref<Entity[]>(formElements);
const currentEntity = ref<Entity|null>(formElements[0] || null)

const onClickEntity = (entity: Entity) => {
  currentEntity.value = entity
}
const onRemove = () => {
  currentEntity.value = null;
  entities.value = [];
}

const onDragStart = (event: DragEvent, model: Model) => {
  event.dataTransfer?.setData('modelType', String(model.type))
}
const onDrop = (event: DragEvent) => {
  const type = event.dataTransfer?.getData('modelType');
  const entity = createEntity(Number(type))
  entities.value.push(entity!)
  currentEntity.value = entity
  console.log(entities.value)
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