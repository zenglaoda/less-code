import { h, defineComponent, reactive } from 'vue';
import styles from './configuration.module.scss';
import { getModel } from '@/components/index'

import type { Entity, Model } from '@/components/index'
import type { PropType } from 'vue';


console.log(styles)

export default defineComponent({
  name: 'Entity-list',

  components: {
  },

  inheritAttrs: false,

  props: {
    entities: {
      type: Object as PropType<Entity[]>,
      required: true
    }
  },

  emits: [
  ],

  setup(props) {
    const renderCfg = (entity: Entity) => {
      const model: Model = getModel(entity.type);
      return h(model.configuration, { entity: entity })
    };
    const renderFormCfg = () => {
      return (<div>
        form
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

      </div>
    );
  },
})