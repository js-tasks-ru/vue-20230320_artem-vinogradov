import { update } from 'lodash';
import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  emits: ['update:count'],

  methods: {
    increaseValue() {
      this.$emit('update:count', this.count + 1);
    },
  },

  template: `<button type="button" @click="increaseValue">{{ count }}</button>`,
});
