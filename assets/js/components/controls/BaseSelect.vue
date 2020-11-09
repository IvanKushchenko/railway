<template>
	<div class="c-select" :class="{'c-select_opened': opened, [`c-select_size-${size}`]: size}">
		<label v-if="label" :for="id" class="c-select__label d-block mb-2">{{label}}</label>
		<div class="c-select__body">
			<select class="c-select__select" v-bind="$attrs" v-on="computedListeners" @click="clickHandler" @blur="blurHandler">
				<option class="c-select__option" value="" v-for="(optionItem, optionIndex) in options" :value="optionItem.value">{{optionItem.text}}</option>
			</select>
		</div>
	</div>
</template>

<script>
import BaseMixin from './BaseMixin';

export default {
	name: 'BaseSelect',
	mixins: [BaseMixin],
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		options: {
			type: Array,
			default: () => []
		},
	},
	data() {
		return {
			opened: false
		}
	},
	computed: {
		id(){
			return `select-${Math.random().toString(36).substr(2, 9)}`;
		},
		computedListeners(){
			return {
				...this.$listeners, 
				change: (e) => {
					this.$emit('change', e.target.value)
				}
			}
		}
	},
	methods: {
		clickHandler(){
			this.opened = !this.opened;
		},
		blurHandler(){
			this.opened = false;
		}
	}
}
</script>

<style lang="css" scoped>
</style>