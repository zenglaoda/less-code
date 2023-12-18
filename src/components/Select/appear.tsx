import { defineComponent } from 'vue';

import type { SelectEntity } from '../types'
import type { PropType } from 'vue';

import { ElSelect, ElOption } from 'element-plus';
// import 'element-plus/es/components/radio/style/css'

export default defineComponent({
  name: 'SelectAppear',

  inheritAttrs: false,
  components: {
    ElOption,
    ElSelect
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
      type: Object as PropType<SelectEntity>,
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
        <el-select modelValue={props.form ? props.form[configuration.field] : ''} onUpdate:model-value={props.form ? onUpdateModelValue : null}>
          {configuration.options.map((item, index) => <el-option key={index} value={item.value} label={item.label}/>)}
        </el-select>
      )
    }
  }
})