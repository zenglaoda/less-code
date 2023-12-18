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
      @clear="onClear"
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

const TRANSFER_KEY = 'payload'
const setTransferPayload = (model: Model) => {
  return JSON.stringify({
    model: model.type,
    from: 'THUMB'
  })
};
const getTransferPayload = (data: any) => {
  try {
    return JSON.parse(data)
  } catch(e) {
    console.log(e)
  }
}

const formCfg = reactive({
  labelPosition: 'top',
  labelWidth: 120,
})
const entities = ref<Entity[]>(formElements);
const currentEntity = ref<Entity|null>(formElements[0] || null)

const onClickEntity = (entity: Entity) => {
  currentEntity.value = entity
}
const onClear = () => {
  currentEntity.value = null;
  entities.value = [];
}
const onRemove = (_:Entity, index: number) => {
  entities.value.splice(index, 1);
  currentEntity.value = entities.value[index]
  if (!currentEntity.value) {
    currentEntity.value = entities.value[index-1]
  }
  console.log(currentEntity.value)
}

const onDragStart = (event: DragEvent, model: Model) => {
  event.dataTransfer?.setData(TRANSFER_KEY, setTransferPayload(model))
}
const onDrop = (event: DragEvent) => {
  const payload = getTransferPayload(event.dataTransfer?.getData(TRANSFER_KEY))
  if (!payload || payload.from !== 'THUMB') return
  const entity = createEntity(payload.model)
  entities.value.push(entity!)
  currentEntity.value = entity
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