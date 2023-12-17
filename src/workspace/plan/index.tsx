import { defineComponent, h, reactive } from 'vue';
import styles from './plan.module.scss';
import models, { getModel } from '@/components/index';

import type { Model, Entity } from '@/components/index'
import type { PropType } from 'vue';

import { ElForm, ElFormItem, ElButton } from 'element-plus'
import PreviwForm from '../preview/index'

console.log(styles)

export default defineComponent({
  name: 'Plan',

  inheritAttrs: false,
  components: {
    ElForm,
    ElFormItem,
    PreviwForm,
    ElButton
  },

  props: {
    entities: {
      type: Array as PropType<Entity[]>,
      default: (() => [] as Entity[])
    },
    activated: {
      type: Object as PropType<Entity|null>,
    },
    formCfg: {
      type: null
    }
  },

  emits: [
    'drop',
    'click-entity',
    'remove'
  ],

  setup(props, { emit }) {
    const state = reactive({
      showPreview: false
    })
    const onDrop = (event: Event) => {
      emit('drop', event)
    };
    const onDragover = (event: Event) => {
      event.preventDefault();
    }
    const renderEntityApprea = (entity: Entity) => {
      const model: Model = getModel(entity.type);
      const configuration = entity.configuration;
      return (
        <div
          class={[
            styles['be-plan__entityBox'],
            props.activated === entity ? styles['is-activated'] : ''
          ]}
          onClick={() => emit('click-entity', entity)}
        >
          <el-form-item
            label={configuration.label}
            required={configuration.required}
          >
            {h(model.appear, { entity: entity })}
          </el-form-item>
        </div>
      );
    }

    return () => (
      <div class={styles['be-plan']} onDrop={onDrop} onDragover={onDragover}>
        <div class={styles['be-plan__actions']} style={{'display': props.entities.length > 0 ? 'flex' : 'none'}}>
          <el-button type="primary" onClick={() => state.showPreview=true}>预览</el-button>
          <el-button type="danger" onClick={() => emit('remove')}>清空</el-button>
        </div>
        <el-form label-position={props.formCfg.labelPosition} label-width={props.formCfg.labelWidth}>
          {props.entities.map((entity) => renderEntityApprea(entity))}
        </el-form>
        <PreviwForm
          onUpdate:model-value={(value) => state.showPreview = value}
          modelVlue={state.showPreview}
          entities={state.showPreview ? props.entities : []}
          formCfg={props.formCfg}
        />
      </div>
    );
  },
})