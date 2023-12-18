import Appear from './appear.tsx';
import Configuration from  './configuration.tsx';
import { Model, RadioEntity } from '../types'

export const RadioModel: Model = {
  type: 3,
  label: '单选框',
  appear: Appear,
  configuration: Configuration,
  createEntity
}


function createEntity() {
  const entity:RadioEntity = {
    type: RadioModel.type,
    configuration: {
      field: '',
      label: '',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3' }
      ]
    }
  }
  return entity;
}