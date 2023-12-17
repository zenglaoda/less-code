import { h, defineComponent, watch, reactive } from 'vue';
import { getModel } from '@/components/index'

import { ElForm, ElFormItem, ElButton } from 'element-plus'
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/index'
import 'element-plus/es/components/button/style/index'

import type {Entity } from '@/components/index'
import type { PropType } from 'vue';


export default defineComponent({
  name: 'PreviwForm',

  components: {
    ElForm,
    ElFormItem,
    ElDialog,
    ElButton
  },

  props: {
    modelVlue: {
      type: Boolean,
      default: false
    },
    entities: {
      type: Array as PropType<Entity[]>,
      default: (() => [] as Entity[])
    },
    formCfg: {
      type: null
    }
  },

  inheritAttrs: false,

  emits: [
    'update:model-value'
  ],

  setup(props, { emit }) {
    const state = reactive({
      form: {},
    })
    const generateForm = () => {
      const form: any = {}
      props.entities.map((entity) => {
        const field = entity.configuration.field as string;
        form[field] = '';
      })
      console.log(form)
      state.form = form;
    }
    const handleClose = () => {
      emit('update:model-value', false)
    }
    const renderFormItem = (entity: Entity) => {
      const model = getModel(entity.type);
      console.log(state.form)
      return (
        <el-form-item label={entity.configuration?.label} >
          {h(model.appear, {
            entity: entity,
            form: state.form
          })}
        </el-form-item>
      );
    }
    const close = () => {
      emit('update:model-value', false)
    }
    const renderFooter = () => {
      return () => (<div>
        <el-button onClick={close}>取消</el-button>
        <el-button type="primary" onClick={close}>确定</el-button>
      </div>)
    }
    generateForm();
    watch (
      () => props.entities,
      generateForm,
      { immediate: true }
    );
    console.log('state.form', state.form)
    
    return () => (
      <el-dialog 
        append-to-body
        model-value={props.modelVlue}
        before-close={handleClose}
        width="600"
        v-slots={{footer: renderFooter()}}
      >
        <el-form
          model={state.form}
          label-position={props.formCfg.labelPosition}
          label-width={props.formCfg.labelWidth}
        >
          {props.entities.map(entity => renderFormItem(entity))}
        </el-form>
        <div>
          <h3>输入内容:</h3>
          <pre>
            {JSON.stringify(state.form, null, 4)}
          </pre>
        </div>
      </el-dialog>
    );
  },
})