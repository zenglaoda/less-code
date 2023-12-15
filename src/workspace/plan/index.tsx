import { defineComponent, h } from 'vue';
import styles from './plan.module.scss';

import type { Model } from '@/components/index'
import type { PropType } from 'vue';

console.log(styles)

export default defineComponent({
  name: 'Plan',

  inheritAttrs: false,

  props: {
    models: {
      type: Array as PropType<Model[]>,
      default: (() => [] as Model[])
    }
  },

  emits: [
    'drop'
  ],

  setup(props, { emit }) {
    const onDrop = (event: Event) => {
      emit('drop', event)
    };
    const onDragover = (event: Event) => {
      event.preventDefault();
    }

    return () => (
      <div class={styles['be-plan']} onDrop={onDrop} onDragover={onDragover}>
        {props.models.map((model) => h(model.appear))}
      </div>
    );
  },
})