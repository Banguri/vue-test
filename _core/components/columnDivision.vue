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

			return 'column-division ' + (this.isRoot && 'root-container')
		},
	},

	mounted() {},

	render(createElement, a) {
		let slots = get(this.$slots, 'default', [])

		return createElement(
			'children-slot',
			{ class: this.topClass },
			slots.map(vnode =>
				createElement('div', { class: 'column-wrapper' }, [vnode])
			)
		)
	},
}
</script>

<style scoped lang="scss">
.column-division {
	min-height: 100%;
	border: 4px solid #333;

	&.root-container {
		min-height: 100vh;
	}

	min-height: 300px;

	.column-wrapper {
		display: inline-block;
	}
}
</style>
