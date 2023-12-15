import type { Component } from 'vue'

export interface Model {
  type: number,
  label: string,
  createEntity: () => any,
  appear: Component,
  configuration: Component,
  thumb?: Component,
}

export interface InputEntity {
  type: Model["type"],
  label:  Model["label"],
  configuration: {
    placeholder: string,
    maxlength: number,
  }
}