import { defineComponent } from 'vue';
import styles from './configuration.module.scss';

import type { Entity } from '@/components/index'
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

  setup(_) {


    return () => (
      <div class={styles['be-cfg']}>

      </div>
    );
  },
})