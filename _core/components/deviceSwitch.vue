<template>
	<Component :is="tag">
		<slot v-if="matched" />
	</Component>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: 'div',
		},
		allowDevices: {
			type: String,
			default: 'all',
			// device종류  pc, mobile, app
			// +) "pc,mobile" 콤마로 여러개 허용 가능
		},
	},

	computed: {
		devices() {
			return this.allowDevices
				.split(',')
				.map(d => d.trim())
				.filter(d => !!d)
		},

		matched() {
			let current = this.$store.state.device.type

			if (
				this.allowDevices === 'all' ||
				this.devices.find(d => d === current)
			) {
				return true
			}
			return false
		},
	},
}
</script>

<style></style>
