import { defineComponent } from 'vue';
import styles from './index.module.scss';

import type { Model } from '@/components/index'
import type { PropType } from 'vue';

console.log(styles)

export default defineComponent({
  name: 'Models',

  inheritAttrs: false,

  props: {
    models: {
      type: Array as PropType<Model[]>,
      default: (() => [] as Model[])
    }
  },

  emits: [

  ],

  setup(props) {
    const renderToolItem = (tool: Model) => {
      return (<div>
        {tool.type}: {tool.label}
      </div>)
    };
    const ondragstart = (tool: Model) => {
      
    };

    return () => (
      <div class={styles['be-models']}>
        <ul class={styles['be-models-ul']}>
          {props.models.map(model => (
            <li
              class={styles['be-model']}
              draggable="true"
              onDragstart={() => ondragstart(model)}
            >
              {renderToolItem(model)}
            </li>)
          )}
        </ul>
      </div>
    );
  },
})