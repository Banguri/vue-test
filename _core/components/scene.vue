<script>
import get from 'lodash/get'

export default {
	props: {
		isRoot: {
			type: Boolean,
		},
	},

	computed: {
		topClass() {
			/**
			 * 근처영역 마우스 오버 감지후 실제 컨텐츠를 감싸는 높이에 따라 스스로 높이 확장
			 */

			return 'scene-container ' + (this.isRoot && 'root-container')
		},
	},

	render(createElement, a) {
		let slots = get(this.$slots, 'default', [])

		return createElement(
			'div',
			{
				class: this.topClass,
				style: {
					height: '100vh',
					width: '100%',
				},
			},
			[
				createElement(
					'children-slot',
					{
						class: {},
					},
					slots
				),
			]
		)
	},
}
</script>

<style scoped lang="scss">
.scene-container {
	width: 100%;
	height: 100%;
}
</style>
