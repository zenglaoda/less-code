import Appear from './appear.tsx';
import Configuration from  './configuration.tsx';
import { Model, SelectEntity } from '../types'

export const SelectModel: Model = {
  type: 4,
  label: '下拉框',
  appear: Appear,
  configuration: Configuration,
  createEntity
}


function createEntity() {
  const entity:SelectEntity = {
    type: SelectModel.type,
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