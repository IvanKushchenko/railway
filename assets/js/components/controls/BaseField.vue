<template>
	<div class="c-field" :class="{ [`c-field_size-${size}`]: size }">
		<label v-if="label" :for="id" class="c-field__label d-block mb-2">{{label}}</label>
		<input :type="type" :id="id" class="c-field__input" v-bind="$attrs" v-on="computedListeners">
	</div>
</template>

<script>
import BaseMixin from './BaseMixin';
export default {

	name: 'BaseField',
	mixins: [BaseMixin],
	props: {
		type: {
			type: String,
			default: 'text'
		},
	},
	data() {
		return {

		}
	},
	computed: {
		id(){
			return `field-${Math.random().toString(36).substr(2, 9)}`;
		},
		computedListeners(){
			return {
				...this.$listeners, 
				input: (e) => {
					this.$emit('input', e.target.value)
				}
			}
		}
	}
}
</script>

<style lang="css" scoped>
</style>