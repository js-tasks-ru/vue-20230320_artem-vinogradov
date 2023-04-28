import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = createApp({
  data: () => ({
    meetupId: undefined,
    titleMeetup: '',
  }),
  watch: {
    meetupId: {
      handler(newValue) {
        fetchMeetupById(newValue).then((response) => (this.titleMeetup = response.title));
      },
    },
  },
});

App.mount('#app');
