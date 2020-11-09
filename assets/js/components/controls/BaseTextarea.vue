<template>
	<div class="c-textarea" :class="{ [`c-textarea_size-${size}`]: size }">
		<label v-if="label" :for="id" class="c-textarea__label d-block mb-2">{{label}}</label>
		<textarea :id="id" class="c-textarea__input" v-bind="$attrs" v-on="computedListeners"></textarea">
	</div>
</template>

<script>
import BaseMixin from './BaseMixin';
export default {

	name: 'BaseTextarea',
	mixins: [BaseMixin],
	data() {
		return {

		}
	},
	computed: {
		id(){
			return `textarea-${Math.random().toString(36).substr(2, 9)}`;
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