require('./globalComponents');

import Vue from 'vue';
import TransportationTariffs from '@js/components/TransportationTariffs.vue';
import SliderClients from '@js/components/sliders/SliderClients.vue';
import SliderReviews from '@js/components/sliders/SliderReviews.vue';
import SliderWeWorking from '@js/components/sliders/SliderWeWorking.vue';
import FormCalculator from '@js/components/forms/FormCalculator.vue';
import FormOrder from '@js/components/forms/FormOrder.vue';
import TripSchedule from '@js/components/TripSchedule.vue';

import { BModal, VBModal } from 'bootstrap-vue'

import VuePlyr from 'vue-plyr';
Vue.use(VuePlyr, {
  plyr: {}
})

new Vue({
	el: '#app',
	directives: {
		'b-modal': VBModal
	},
	components: {
		TransportationTariffs,
		SliderClients,
		SliderReviews,
		SliderWeWorking,
		FormCalculator,
		FormOrder,
		TripSchedule,
		BModal
	}
});