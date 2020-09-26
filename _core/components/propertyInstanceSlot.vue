<script>
import instanceRenderer from './instanceRenderer'

export default {
	props: {
		pid: {
			type: String,
		},
		instanceOrInstances: {
			type: Object,
		},
		minHeight: {
			type: Number,
		},
		minWidth: {
			type: Number,
		},
	},

	components: {
		instanceRenderer,
	},

	render(ce) {
		return ce(
			'div',
			{
				props: {
					'data-system-property-slot': this.pid,
				},

				options: {},

				style: {
					minHeight: this.minHeight,
					minWidth: this.minWidth,
				},
			},
			Array.isArray(this.instanceOrInstances)
				? this.instanceOrInstances.map(instance =>
						ce('instance-renderer', {
							props: {
								instance: instance,
							},
						})
				  )
				: ce('instance-renderer', {
						props: {
							instance: this.instanceOrInstances,
						},
				  })
		)
	},
}
</script>
