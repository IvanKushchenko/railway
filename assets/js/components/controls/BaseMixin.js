export default {
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: {
			type: [String, Number],
			default: null
		},
		label: {
			type: String,
			default: null
		},
		size: {
			type: String,
			default: null
		}
	}
}