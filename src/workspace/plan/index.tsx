
import type { Model, Entity } from '@/components/index'
import type { PropType } from 'vue';

import { defineComponent, h, reactive } from 'vue';
import styles from './plan.module.scss';
import { getModel } from '@/components/index';

import { ElForm, ElFormItem, ElButton } from 'element-plus'
import PreviwForm from '../preview/index'

import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  name: 'Plan',

  inheritAttrs: false,
  components: {
    ElForm,
    ElFormItem,
    PreviwForm,
    ElButton,
    VueDraggableNext
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
    'remove',
    'clear'
  ],

  setup(props, { emit }) {
    const state = reactive({
      showPreview: false
    });
    const onDrop = (event: Event) => {
      emit('drop', event)
    };
    const onDragover = (event: Event) => {
      event.preventDefault();
    };
    const renderEntity = (entity: Entity, index: number) => {
      const model: Model = getModel(entity.type);
      const configuration = entity.configuration;
      return (
        <div
          key={index}
          class={[
            styles['be-plan__entityBox'],
            props.activated === entity ? styles['is-activated'] : ''
          ]}
          onClick={() => emit('click-entity', entity)}
        >
          <el-form-item
            label={configuration.label}
          >
            {h(model.appear, { entity: entity })}
          </el-form-item>
          <div class={styles['be-plan__entityDelete']}>
            <el-button type="danger" size="small" text onClick={()=>emit('remove', entity, index)}>删除</el-button>
          </div>
        </div>
      );
    }

    return () => (
      <div class={styles['be-plan']} onDrop={onDrop} onDragover={onDragover}>
        <div class={styles['be-plan__actions']} style={{'display': props.entities.length > 0 ? 'flex' : 'none'}}>
          <el-button type="primary" onClick={() => state.showPreview=true}>预览</el-button>
          <el-button type="danger" onClick={() => emit('clear')}>清空</el-button>
        </div>

        <el-form label-position={props.formCfg.labelPosition} label-width={props.formCfg.labelWidth}>
          <vue-draggable-next list={props.entities}>
            {props.entities.map((entity, index) => renderEntity(entity, index))}
          </vue-draggable-next>
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