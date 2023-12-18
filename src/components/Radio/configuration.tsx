import { defineComponent } from 'vue';

import type { RadioEntity } from '../types'
import type { PropType } from 'vue';

import { ElRadioGroup, ElRadio, ElForm, ElFormItem, ElInput } from 'element-plus';
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/radio/style/css'
import OptionsVue from '../Options/index.vue'

export default defineComponent({
  name: 'RadioAppear',

  inheritAttrs: false,
  components: {
    ElRadioGroup,
    ElRadio,
    ElForm,
    ElFormItem,
    ElInput,
    OptionsVue
  },

  props: {
    entity: {
      type: Object as PropType<RadioEntity>,
      required: true
    }
  },

  setup(props) {
    const configuration = props.entity.configuration;
    return () => {
      return (
        <el-form label-position="top">
          <el-form-item label="字段名">
            <el-input v-model={configuration.field}/>
          </el-form-item>
          <el-form-item label="标签文本">
            <el-input v-model={configuration.label}/>
          </el-form-item>
          <options-vue options={configuration.options}></options-vue>
        </el-form>
      )
    }
  }
})