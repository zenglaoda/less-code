import type { Component } from 'vue'

export interface Model {
  type: number,
  label: string,
  appear: Component,
  configuration: Component,
  thumb?: Component,
  createEntity: () => Entity
}

export interface Entity {
  type: Model["type"],
  configuration: {
    field: string,
    label: string
  }
}

export interface InputEntity extends Entity {
  configuration: {
    field: string,
    label: string,
    placeholder: string,
    maxlength: number|null,
    clearable?: boolean
  }
}

export interface DatePicker extends Entity {
  configuration: {
    field: string,
    label: string,
    placeholder: string,
    format: string,
    valueFormat: string
  }
}

export interface Option {
  label: string,
  value: string
} 

export interface RadioEntity extends Entity {
  configuration: {
    field: string,
    label: string,
    options: Option[]
  }
}

export interface SelectEntity extends Entity {
  configuration: {
    field: string,
    label: string,
    options: Option[]
  }
}