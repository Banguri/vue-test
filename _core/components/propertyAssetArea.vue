<template>
	<div :data-system-property-bind="pid" data-system-property-type="asset">
		<img class="image" :src="url" />
	</div>
</template>

<script>
import _ from 'lodash'

export default {
	props: {
		pid: {
			type: String,
		},

		asset: {
			type: Object,
		},

		default: {
			type: String,
		},
	},

	computed: {
		url() {
			if (_.get(this.asset, 'label.file', null)) {
				return `//${this.$$config.apiHost}/${_.get(
					this.asset,
					'label.file'
				)}`
			} else {
				return this.default
			}
		},
	},
}
</script>

<style scoped>
.image {
	width: inherit;
	height: inherit;
}
</style>
