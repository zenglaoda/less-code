import { InputModel  } from './Input'
import { datePickerModel } from './Date-picker'

const models = [
  InputModel,
  datePickerModel
]

export default models


export function createEntity(type: number): any {
  const model = models.find(model => model.type === type)!;
  return model.createEntity()
}

export function getModel(type: number) {
  return models.find(model => model.type === type)!;
}

export * from './types';
