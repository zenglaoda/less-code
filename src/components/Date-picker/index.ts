import Appear from './appear.vue';
import Configuration from  './configuration.vue';
import { Model, DatePicker} from '../types'

export const datePickerModel: Model = {
  type: 2,
  label: '时间',
  appear: Appear,
  configuration: Configuration,
  createEntity
}


function createEntity() {
  const entity:DatePicker = {
    type: 2,
    configuration: {
      placeholder: '',
      field: '',
      label: '',
      format: '',
      valueFormat: '',
    }
  }
  return entity;
}