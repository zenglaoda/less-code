import Thumb from  './thumb.vue';
import Appear from './appear.vue';
import Configuration from  './configuration.vue';
import { Model, InputEntity } from '../types'

export const InputModel: Model = {
  type: 1,
  label: '文本框',
  thumb: Thumb,
  appear: Appear,
  configuration: Configuration,
  createEntity
}


function createEntity() {
  const entity:InputEntity = {
    type: InputModel.type,
    configuration: {
      placeholder: '',
      field: '',
      label: '',
      maxlength: null,
    }
  }
  return entity;
}