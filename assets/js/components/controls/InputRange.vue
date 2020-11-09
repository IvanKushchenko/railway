<template>
	<div class="c-input-range">
		<h5 v-if="label" class="c-input-range__label font-weight-normal m-0 mb-2 d-flex align-items-center">
			<svg v-if="icon" class="c-input-range__icon">
				<use :href="`#${icon}`"></use>	
			</svg>
			{{label}}
		</h5>
		<vue-slider tooltip="none" :min="min" :max="max" :height="4" :dot-size="[22, 22]">
			<template #dot="{value}">
				<div class="c-input-range__dot">{{value}}</div>
			</template>
		</vue-slider>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component';
export default {

	name: 'InputRange',
	components: {
		VueSlider
	},
	props: {
		icon: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 10
		}
	},
	data() {
		return {
			value: null
		}
	}
}
</script>

<style lang="css">
</style>