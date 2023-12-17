import { h, defineComponent, reactive } from 'vue';
import styles from './configuration.module.scss';
import { getModel } from '@/components/index'

import { ElForm, ElFormItem } from 'element-plus'
import { ElRadioGroup, ElRadio, ElRadioButton, ElInput } from 'element-plus';
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/radio-button/style/css'
import 'element-plus/es/components/input/style/css'
import type { Entity, Model } from '@/components/index'
import type { PropType } from 'vue';


console.log(styles)

export default defineComponent({
  name: 'Configuration',

  components: {
    ElForm,
    ElFormItem,
    ElRadioGroup,
    ElRadioButton,
    ElRadio,
    ElInput
  },

  inheritAttrs: false,

  props: {
    models: {
      type: Array as PropType<Model[]>,
      default: (() => [] as Model[])
    },
    entity: {
      type: Object as PropType<Entity>,
      required: true
    },
    formCfg: {
      type: null
    }
  },

  emits: [
  ],

  setup(props) {
    const renderCfg = () => {
      const entity = props.entity
      const model: Model = getModel(entity.type);
      return h(model.configuration, { entity: entity })
    };
    const renderFormCfg = () => {
      return (<div>
        <el-form label-position="top">
          <el-form-item label="标签位置">
            <el-radio-group model-value={props.formCfg.labelPosition} onUpdate:modelValue={(value: string)=>props.formCfg.labelPosition=value}>
              <el-radio label="top">顶部</el-radio>
              <el-radio label="left">左边</el-radio>
              <el-radio label="right">右边</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签宽度">
            <el-input v-model={props.formCfg.labelWidth}/>
          </el-form-item>
        </el-form>
      </div>)
    };

    const state = reactive({
      tab: '1'
    })
    const onTabChange = (value: string) => {
      state.tab = value;
    }

    return () => (
      <div class={styles['be-cfg']}>
        <div class={styles['be-cfg__tab']}>
          <el-radio-group model-value={state.tab} onUpdate:modelValue={onTabChange}>
            <el-radio-button label="1">字段配置</el-radio-button>
            <el-radio-button label="2">表单配置</el-radio-button>
            <el-radio-button label="3">控件列表</el-radio-button>
          </el-radio-group>
        </div>
        {state.tab === '1' ? renderCfg() : renderFormCfg()}
      </div>
    );
  },
})