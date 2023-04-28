import { createApp } from './vendor/vue.esm-browser.js';

const App = createApp({
  data: () => ({ a: '', b: '', operator: '' }),
  computed: {
    result() {
      switch (this.operator) {
        case 'sum':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide': {
          if (this.b === 0) return 'Деление на ноль не разрешено!';
          return this.a / this.b;
        }
      }
      return 0;
    },
  },
});

App.mount('#app');
