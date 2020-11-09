<template>
	<div class="c-radio d-flex" :class="{'flex-row-reverse justify-content-end': placement == 'left'}">
		<label v-if="label" :for="id" class="c-radio__label d-block m-0">{{label}}</label>
		<input type="radio" :id="id" class="c-radio__input m-0 mt-1" :class="{'mr-3': placement == 'left', 'ml-3': placement == 'right'}" v-bind="$attrs" v-on="computedListeners">
	</div>
</template>

<script>
import BaseMixin from './BaseMixin';
export default {

	name: 'BaseRadio',
	mixins: [BaseMixin],
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		placement: {
			type: String,
			default: 'right'
		}
	},
	data() {
		return {

		}
	},
	computed: {
		id(){
			return `radio-${Math.random().toString(36).substr(2, 9)}`;
		},
		computedListeners(){
			return {
				...this.$listeners, 
				change: (e) => {
					this.$emit('change', e.target.value)
				}
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>