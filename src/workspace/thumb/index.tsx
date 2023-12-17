import { defineComponent } from 'vue';
import styles from './thumb.module.scss';
import models from '@/components/index'


import type { Model } from '@/components/index'

console.log(styles)

export default defineComponent({
  name: 'Thumbs',

  inheritAttrs: false,

  emits: [
    'dragstart'
  ],

  setup(props, { emit }) {
    const renderThumbItem = (model: Model) => {
      return (<div>
       {model.label}
      </div>)
    };
    const ondragstart = (event: DragEvent, model: Model) => {
      emit('dragstart', event, model)
    };

    return () => (
      <div class={styles['be-thumbs']}>
        <ul class={styles['be-thumbs__ul']}>
          {models.map(model => (
            <li
              class={styles['be-thumb']}
              draggable="true"
              onDragstart={(event) => ondragstart(event, model)}
            >
              {renderThumbItem(model)}
            </li>)
          )}
        </ul>
      </div>
    );
  },
})