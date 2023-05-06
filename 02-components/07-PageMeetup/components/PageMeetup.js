import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data() {
    return { meetup: null, errorMessage: null };
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  methods: {
    async getMeetup() {
      fetchMeetupById(this.meetupId)
        .then((res) => (this.meetup = res))
        .catch((error) => (this.errorMessage = error.message));
    },
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.meetup = null;
        this.getMeetup();
      },
    },
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup"/>

      <UiContainer v-if="!meetup && !errorMessage">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="errorMessage">
        <UiAlert>{{ errorMessage }}</UiAlert>
      </UiContainer>
    </div>`,
});
