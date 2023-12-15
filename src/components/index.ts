import { InputModel  } from './Input'

const modes = [
  InputModel
]

export default modes


export function createEntity(type: number): any {
  const mode = modes.find(mode => mode.type === type);
  if (!mode) return null
  return mode.createEntity()
}

export * from './types';
