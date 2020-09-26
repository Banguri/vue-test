<template>
	<component
		:is="tag"
		:data-system-property-bind="pid"
		data-system-property-type="text"
		v-html="text"
	>
	</component>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		pid: {
			type: String,
		},

		text: {
			type: String,
		},
	},
}
</script>
