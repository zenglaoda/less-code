import { defineComponent } from 'vue';

import type { RadioEntity } from '../types'
import type { PropType } from 'vue';

import { ElRadioGroup, ElRadio } from 'element-plus';
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'

export default defineComponent({
  name: 'RadioAppear',

  inheritAttrs: false,
  components: {
    ElRadioGroup,
    ElRadio
  },

  props: {
    form: {
      type: null
    },
    readonly: {
      type: Boolean,
      default: false
    },
    entity: {
      type: Object as PropType<RadioEntity>,
      required: true
    }
  },

  setup(props) {
    const configuration = props.entity.configuration;
    const onUpdateModelValue = (value: any) => {
      props.form[configuration.field] = value;
    }
    return () => {
      return (
        <el-radio-group modelValue={props.form ? props.form[configuration.field] : ''} onUpdate:model-value={props.form ? onUpdateModelValue : null}>
          {configuration.options.map(item => <el-radio label={item.value}>{item.label}</el-radio>)}
        </el-radio-group>
      )
    }
  }
})